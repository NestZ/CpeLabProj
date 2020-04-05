const mongoose = require('mongoose');

const courseSchema = new mongoose.Schema({
    _uid : {
        type : mongoose.ObjectId,
        required : true
    },
    name : {
        type : String,
        required : true
    },
    studyTime : {
        type : String,
        required : true
    },
    examTime : {
        type : String,
        required : true
    },
    registCnt : {
        type : Number,
        required : true
    },
    maxRegist : {
        type : Number,
        required : true
    }
});

module.exports = mongoose.model('Course', courseSchema);