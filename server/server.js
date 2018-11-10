let express = require('express');
let bodyParser = require('body-parser');

let {mongoo} = require('./db/mongoo');
let {Todo} = require('./models/todo');
let {User} = require('./models/user');
// let mongoose = require('mongoose');

let app = express();
app.use(bodyParser.json());




app.post('/todos', (req, res) => {
    let todo = new Todo({
         text: req.body.text
     });

    todo.save().then(doc => {
        res.send(doc)
        console.log(doc)
    }, e => {
        res.status(400).send(e);
    });
    console.log(req.body.text)
});

app.get('/todos', (req, res) => {
    Todo.find().then(todos => {
        res.send({todos})
    }, e => {
        res.status(200).send(e);
    })
});


app.listen(3000, () => {
    console.log('Starting on 3000 port')
});

module.exports = {
    app
}