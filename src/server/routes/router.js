require('dotenv').config({path: '../../../.env.local'});
const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const Student = require('../models/studentModel');
const Course = require('../models/courseModel');
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

router.get('/', (req, res, next) => {
    res.status(200).send('kuyraisus');
    console.log('kuyraisus');
});

module.exports = router;