const express = require('express')
require('./db/mongoose')
const userRouter = require('./routers/user')
const taskRouter = require('./routers/task')

const app = express()
const port = process.env.PORT || 3000

// app.use( (req, res, next) => {
//    if( req.method === "GET") {
//         res.send('GET requrests are disabled ')
//    } else {
//        next()
//    } 
// })
// app.use( (req, res, next) => {
//     res.status(503).send('Site is currently down')
// })

//automatically parse incoming JSON to an Object 
app.use(express.json())
app.use(userRouter)
app.use(taskRouter)



app.listen(port, () => {
    console.log('Server is up on port' + port)
})

const pet = {
    name: 'hal'
}

pet.toJSON = function () {
    console.log(this)
    return this
}

console.log(JSON.stringify(pet))

// const jwt = require('jsonwebtoken')

// const myFunction = async () => {
//     const token = jwt.sign({ _id: 'abc123'}, 'thisismynewapp', { expiresIn: '7 days'})
//     console.log(token)
    
//     const data = jwt.verify(token, 'thisismynewapp')
//     console.log(data)
// }
// myFunction()

// const bcrypt = require('bcryptjs')

// const myFunction = async () => {
//     const password = 'Red12345!'
//     const hashedPassword = await bcrypt.hash(password, 8)

//     console.log(password)
//     console.log(hashedPassword)
// }

// myFunction()