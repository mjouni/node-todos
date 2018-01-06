const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (error, db) => {
    if (error) {
        return console.log('Error encountered while connecting to database:', error);
    }

    console.log('Connected to TodoApp database on MongoDB');

    // deleteMany
    // db.collection('Todos').deleteMany({text: 'Why not today'}).then((result) => {
    //     console.log(result);
    // });
    // // deleteOne
    // db.collection('Todos').deleteMany({text: 'Echo Nomad Why'}).then((result) => {
    //     console.log(result);
    // });

    // findOneAndDelete
    db.collection('Todos').findOneAndDelete({completed: false}).then((result) => {
        console.log(result);
    });

    // db.close();
});

