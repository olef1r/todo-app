const {MongoClient,ObjectId} = require('mongodb');


const url = 'mongodb://localhost:27017';

MongoClient.connect(url, (err, client) => {
    if (err) {
        return console.log("Connected is failde")
    };
    console.log('Connecred successfully to server');

    let db = client.db('TodoApp')
    db.collection('Users').findOneAndUpdate({
        _id: new ObjectId("5bdc5e0d3878541480201622")
    },
    {
        $set: {
            name: "Anastasiia"
        }
    }, 
    {
        return: false
    }, (err, res) => {
        if(err) {
            console.log("Error " + err)
        }
        console.log(res)
    })
    client.close();
});
    