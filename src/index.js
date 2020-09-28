const express = require('express')
const User = require('./models/user')
require('./db/mongoose')
const Task = require('./models/task')

const app = express()
const port = process.env.PORT || 3000

//automatically parse incoming JSON to an Object 
app.use(express.json())



app.post('/users', async (req, res)=> {
    const user = new User(req.body)

    try {
        await user.save()
        res.status(201).send(user)
    } catch (e) {
        res.status(400).send(e)
    }
    // user.save().then( () => {
    //     res.status(201).send(user)
    // }).catch( (error) => {
    //     res.status(400).send(error)
    // })
})

app.get('/users', async (req, res) => {
    try {
        const users = await User.find({})
        res.send(users)
    } catch {
        res.status(500).send()
    }
})

app.get('/users/:id', async (req, res) => {
    const _id = req.params.id

    try{
        const user = await User.findById(_id)
        if(!user) {
            return res.status(404).send()
        }
        res.send(user)
    } catch{
        res.status(500).send()
    }
})

app.post('/tasks', async (req, res) => {
    const task = new Task(req.body)
    try {
        await task.save()
        res.status(201).send(task)
    } catch (e) {
        res.status(400).send(e)
    }
})

app.get('/tasks', async (req, res) => {
    try {
        const tasks = await Task.find({})
        res.send(tasks)
    } catch {
        res.status(500).send()
    }
})

app.get('/tasks/:id', async (req, res) => {
    const _id = req.params.id
    try{
        const user = await Task.findById(_id)
        if(!user) {
            res.status(404).send()
        }
        res.send(user)
    } catch {
        res.status(500).send()
    }
})


app.listen(port, () => {
    console.log('Server is up on port' + port)
})