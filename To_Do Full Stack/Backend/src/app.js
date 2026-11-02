const express = require('express')
const todoModel = require('./models/models.js')
const cors = require('cors')

const app = express()


app.use(cors())
app.use(express.json())


app.post('/addTask' , async(req , res) =>{




    const todo = await todoModel.create({
        title : req.body.title , 
        details : req.body.details
    })
    res.status(201).json({
        message : 'Task added successfully' , 
        todo
    })
})


app.get('/tasks' , async(req , res) => {

    const tasks = await todoModel.find()

    res.status(200).json({
        message : 'Tasks fetched successfully' , 
        tasks
    })
})


app.delete('/tasks/:id', async(req , res) => {
    const id = req.params.id

    await todoModel.findOneAndDelete({
        _id : id
    })

    res.status(200).json({
        message : 'Task deleted successfully'
    })
})
module.exports = app