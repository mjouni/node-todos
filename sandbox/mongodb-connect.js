const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (error, db) => {
    if (error) {
        return console.log('Error encountered while connecting to database:', error);
    }

    console.log('Connected to TodoApp database on MongoDB');

    // db.collection('Todos').insertOne({
    //     text: 'Something random',
    //     completed: false
    // }, (error, result) => {
    //     if (error){
    //       return console.log('Unable to insert toddo', error)
    //     }
    //    console.log(JSON.stringify(result.ops, undefined, 2));
    // });


    // db.collection('Users').insertOne({
    //     name: 'Mohammad Jouni',
    //     age: 32
    // }, (error, result) => {
    //     if (error) {
    //         return console.log('Unable to insert user', error)
    //     }
    //
    //     console.log('Inserted new record');
    //     console.log(JSON.stringify(result.ops, undefined, 2));
    //     var timestamp = result.ops[0]._id.getTimestamp();
    //     console.log(timestamp);
    //
    // });

    db.close();
});

