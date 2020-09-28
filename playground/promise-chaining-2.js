require('../src/db/mongoose')
const Task = require('../src/models/task')
const User = require('../src/models/user')


// Task.findByIdAndDelete('5f6fb47621ae311ae1c3a797').then( () => {
//     return Task.countDocuments({ completed: false })
// }).then( (result) => {
//     console.log(result)
// }).catch( (e) => {
//     console.log(e)
// })



const deleteAndCount = async (id) => {
    const task = await Task.findByIdAndDelete(id)
    const count = await Task.countDocuments({completed: false})
    return count
}

deleteAndCount("5f6fb4caf515701afc27fbce").then((count) => {
    console.log(count)
}).catch( (e) => {
    console.log(e)
})