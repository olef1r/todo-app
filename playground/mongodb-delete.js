const {MongoClient} = require('mongodb');


const url = 'mongodb://localhost:27017';

MongoClient.connect(url, (err, client) => {
    if (err) {
        return console.log("Connected is failde")
    };
    console.log('Connecred successfully to server');

    let db = client.db('TodoApp')
    db.collection('Todos').findOneAndDelete({complted: false})  
        .then(res => {
            console.log(res)
        }, err => 'Error ' + err)

    client.close();
});
    