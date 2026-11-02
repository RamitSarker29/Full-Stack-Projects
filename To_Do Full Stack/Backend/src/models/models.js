const mongoose = require('mongoose')

const todoSchema = new mongoose.Schema({
    title : String , 
    details : String
})

const todoModel = mongoose.model('todo' , todoSchema)

module.exports = todoModel