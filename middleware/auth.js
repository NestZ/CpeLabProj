const jwt = require('jsonwebtoken');
const Student = require('../models/studentModel');

const auth = async (req, res, next) => {
    try{
        const token = sessionStorage.getItem('token').replace('Bearer', '');
        if(token == null)token = req.header('Authorization').replace('Bearer ', '');
        const payload = jwt.verify(token, 'reg-cmu');
        const student = await Student.findOne({_id : payload._id, 'tokens.token' : token});
        if(!student)throw new Error();
        req.student = student;
        req.token = token;
        next();
    }
    catch(error){
        res.status(401).json({error : "authorize failed isus!!"});
    }
}

module.exports = auth;