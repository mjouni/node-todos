const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (error, db) => {
    if (error) {
        return console.log('Error encountered while connecting to database:', error);
    }

    console.log('Connected to TodoApp database on MongoDB');


    db.collection('Todos').findOneAndUpdate( {_id: new ObjectID("5a429ccfbb90061caa5f8810")}, {
        $set : {
            completed: true
        }
    }, {
        returnOriginal : false
    } ).then( result => {
        console.log(result);
    });

    // db.close();
});

