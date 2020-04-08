require('dotenv').config({path: '../../../.env.local'});
const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const validator = require('validator')

const studentSchema = new mongoose.Schema({
    name : {
        type : String,
        required : true,
        trim : true
    },
    email : {
        type : String,
        required : true,
        unique : true,
        validator : (value) => {
            if(!validator.isEmail()){
                throw new Error('Invalid email !');
            }
        }
    },
    password : {
        type : String,
        required : true,
        minlength : 6
    },
    courses : [],
    tokens : [{
        token : {
            type : String,
            required : true
        }
    }]
});

studentSchema.pre('save', async function(next){
    const student = this;
    if(student.isModified('password')){
        student.password = await bcrypt.hash(student.password, 10);
    }
    next();
});

studentSchema.methods.generateAuthToken = async function(){
    const student = this;
    const payload = {
        _id : student._id,
        email : student.email
    };

    const token = jwt.sign(payload, process.env.REACT_APP_TOKEN_KEY, {expiresIn : '2h', issuer : 'CMU'});
    student.tokens = student.tokens.concat({token});
    await student.save();
    return token;
}

studentSchema.statics.findByCredentials = async (email, password) => {
    try{
        const student = await Student.findOne({email});
        if(!student)throw new Error({message : "Student not found!"});
        const isPasswordMatch = await bcrypt.compare(password, student.password);
        if(!isPasswordMatch)throw new Error({message : 'Password not match!'});
        return student;
    }
    catch(error){
        return null;
    }
}

const Student = mongoose.model('Student', studentSchema);
module.exports = Student;