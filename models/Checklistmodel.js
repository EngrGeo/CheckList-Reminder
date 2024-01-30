const mongoose = require('mongoose')

const ChecklistSchema = new mongoose.Schema({
    text: {
        type: String,
        require: true
    }
})

module.exports =mongoose.model('CheckList', ChecklistSchema)