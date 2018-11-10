const {MongoClient} = require('mongodb');


const url = 'mongodb://localhost:27017';

MongoClient.connect(url, (err, client) => {
    if (err) {
        return console.log("Connected is failde")
    };
    console.log('Connecred successfully to server');
    let db = client.db('TodoApp')
    // db.collection('Todos').find().count()
    //     .then((count) => {
    //         console.log(count)
    //     }, err => {
    //         console.log('Unable to fetch data ' + err)
    //     })
    db.collection('Users').find({name: 'Asya'}).count()
        .then(count => {
            console.log(count)
        }, err => {
            console.log('Unable to fetch data ' + err)
        })
    client.close();
});