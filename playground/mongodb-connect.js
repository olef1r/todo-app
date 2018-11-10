const {MongoClient} = require('mongodb');


const url = 'mongodb://localhost:27017/TodoApp';

MongoClient.connect(url, (err, client) => {
    if (err) {
        return console.log("Connected is failde")
    };
    console.log('Connecred successfully to server');
    client.close();
});
    /*
    let db = client.db('TodoApp')
    /*db.collection('Todos').insertOne({
        text: 'Something todo',
        complted: false
    }, (err, result) => {
        if (err) {
            return console.log('Unable to insert todo', err);
        }

        console.log(JSON.stringify(result.ops, undefined, 2));
    });
    db.collection('Users').insertOne({
        name: 'Asya',
        age: 21,
        location: 'Kyiv'
    }, (err,result) => {
        if (err) {
            return console.log('Unable to insert todo', err);
        }
        console.log(result.ops[0]._id.getTimestamp());
    });



    console.log('Connecred successfully to server');
    client.close();
})*/