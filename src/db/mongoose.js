const mongoose = require('mongoose')


mongoose.connect('mongodb://127.0.0.1:27017/task-manager-api', {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
    useUnifiedTopology: true
})



// const me = new User({
//     name: 'Diego      ',
//     email: 'MYEMAIL@GMAIL.com              ',
//     password: 'hidiego'
    
// })

// me.save().then(() => {
//     console.log(me)
// }).catch((error) => {
//     console.log('Error', error)
// })



// const task1 = new Task({description: 'Wash dishes      '})

// task1.save().then(()=> {
//     console.log(task1)
// }).catch( (error) => {
//     console.log('Error', error)
// })