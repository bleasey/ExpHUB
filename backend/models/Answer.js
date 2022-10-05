const mongoose = require('mongoose');

const answerSchema = new mongoose.Schema({
    question:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Question'
    },
    answer:{
        type:String,
    }
})

module.exports = mongoose.model('Answer',answerSchema);