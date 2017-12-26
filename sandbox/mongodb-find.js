const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (error, db) => {
    if (error) {
        return console.log('Error encountered while connecting to database:', error);
    }

    console.log('Connected to TodoApp database on MongoDB');

    // db.collection('Todos').find({_id: new ObjectID('5a42926bcc8b62cc239a5a13')}).toArray().then((docs) => {
    //     console.log('Todos');
    //     console.log(JSON.stringify(docs, undefined, 2))
    // }, (error) => {
    //     console.log('Unable to fetch todos', error);
    // });

    // db.collection('Todos').find().count().then((count) => {
    //     console.log('Todos counts:' , count);
    // }, (error) => {
    //     console.log('Error while fetching count of Todos');
    // });

    db.collection('Users').find({name: "Echo Nomad"}).toArray().then((users) => {
        console.log(JSON.stringify(users, undefined, 2));
        },
         (error) => {
            console.log('Unable to fetch users', error);

    });

    // db.close();
});

