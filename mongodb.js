// CRUD create read update delete

// const mongodb = require('mongodb')
// const MongoClient = mongodb.MongoClient
// const ObjectID = mongodb.ObjectID

// const { MongoClient, ObjectID } = require('mongodb')

// const connectionURL = 'mongodb://127.0.0.1:27017'
// const databaseName = 'task-manager'


// MongoClient.connect(connectionURL, { useNewUrlParser: true  },{ useUnifiedTopology: true }, (error, client) => {
//     if(error){
//       return console.log('Unable to connect to database')
//     } 

//     const db = client.db(databaseName)

    // const updatePromise = db.collection('users').updateOne({
    //   _id: new ObjectID("5f6cc0fc376952264df428c0")
    // }, {
    //   $inc: {
    //     age: 1
    //   }
    // })

    // updatePromise.then((result) => {
    //   console.log(result)
    // }).catch((error) => {
    //   console.log(error)
    // })

    // const updatePromise = db.collection('tasks').updateMany({
    //   completed: false
    // }, {
    //   $set: {
    //     completed: true
    //   }
    // })

    // updatePromise.then( (result) => {
    //   console.log(result)
    // }).catch( (error) => {
    //   console.log(error)
    // })
    // db.collection('users').deleteMany({
    //   age: 27
    // }).then( (result) => {
    //   console.log(result)
    // }).catch( (error) => {
    //   console.log(error)
    // })

    // db.collection('tasks').deleteOne({
    //   description: 'Clean room'
    // }).then( (result) => {
    //   console.log(result)
    // }).catch( (error) => {
    //   console.log(error)
    // })



// })