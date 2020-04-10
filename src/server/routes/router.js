require('dotenv').config({path: '../../../.env.local'});
const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const Student = require('../models/studentModel');
const Auth = require('../middleware/auth');
const conStr = process.env.REACT_APP_DATABASE_URL.replace('<password>', process.env.REACT_APP_DATABASE_PWD)
                                        .replace('<database>', process.env.REACT_APP_DATABASE_NAME);

mongoose.connect(conStr, {
    useNewUrlParser : true,
    useUnifiedTopology : true,
    useFindAndModify : false
});

const db = mongoose.connection;
db.on('error', () => {
    console.log('Database Connection Error!');
});
db.once('open', () => {
    console.log('Database Connected!');
});

router.post('/signup', async (req, res, next) => {
    try {
        const student = new Student(req.body);
        await student.save();
        const token = await student.generateAuthToken();
        res.status(201).json({message : 'Student added !', student, token});
    }
    catch(error){
        res.status(401).json({error :  error.message});
    }
});

router.post('/login', async (req, res, next) => {
    try{
        const { email, password } = req.body;
        const student = await Student.findByCredentials(email, password);
        if(!student)res.status(401).json({error : 'Login failed !'});
        const token = await student.generateAuthToken();
        res.status(200).json({token});
    }
    catch(error){
        res.status(400).json({error : error.message});
    }
});

router.post('/logout', Auth, async (req, res, next) => {
    const student = req.student;
    const currToken = req.token;
    try{
        student.tokens = student.tokens.filter(item => {
            return item.token !== currToken;
        });
        await student.save();
        res.status(201).json({message : "logout success!"});
    }
    catch(error){
        res.status(400).json({error : error.message});
    }
});

router.delete('/dropuni', Auth, async (req, res, next) => {
    const student = req.student;
    try{
        Student.deleteOne({name : student.name}, function(error){
            if(error)res.status(500).json({error : "drop from university failed!"});
        });
        res.status(200).json({message : "drop from university success!"});
    }
    catch(error){
        res.status(500).json({error : error.message});
    }
});

router.get('/me', Auth, (req, res, next) => {
    const student = req.student;
    res.status(201).json(student);
});

router.post('/reg', Auth, async (req, res, next) => {
    const student = req.student;
    const {id, name, credits, day, time} = req.body;
    try{
        const currStudent = await Student.findById(student.id);
        const allCourse = currStudent.courses;
        let dup = false;
        allCourse.forEach(item => {
            if(item.id === id)dup = true;
        });
        if(dup)return res.status(500).json({error : "course duplicate!"});
        allCourse.push({
            id : id,
            name : name,
            credits : credits,
            day : day,
            time : time
        });
        const newCourse = {
            courses : allCourse
        }
        const result = await Student.findByIdAndUpdate(student.id, newCourse, {new : true});
        if(!result)return res.status(404).json({error : "add failed!"});
        res.status(200).json({msg : "add success!"});
    }
    catch(error){
        res.status(500).json({error : error.message});
    }
});

router.get('/me/course', Auth, async (req, res, next) => {
    const student = req.student;
    try{
        const currStudent = await Student.findById(student.id);
        const allCourse = currStudent.courses;
        if(!allCourse)res.status(404).json({error : "get course failed!"});
        res.status(200).json({courses : allCourse});
    }
    catch(error){
        res.status(500).json({error : error.message});
    }
});

router.delete('/drop', Auth, async (req, res, next) => {
    const student = req.student;
    const courseId = req.body.id;
    try{
        const currStudent = await Student.findById(student.id);
        const allCourse = currStudent.courses;
        const newCourse = allCourse.filter(item => {
            return item.id !== courseId;
        });aa
        const result = await Student.findByIdAndUpdate(student.id, {courses : newCourse}, {new : true});
        if(!result)return res.status(404).json({error : "drop failed!"});
        res.status(200).json({msg : "drop success!"});
    }
    catch(error){
        res.status(500).json({error : error.message});
    }
});

router.get('/admin/students', async (req, res, next) => {
    try{
        await Student.find({}, function(error, students){
            if(!students)res.status(400).json({error : error.message})
            res.status(200).json(students);
        });
    }
    catch(error){
        res.status(500).json({error : error.message});
    }
});

module.exports = router;