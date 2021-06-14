const express = require('express');
const fs = require('fs');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(bodyParser.json());

app.get('/todoList', (req, res) => {
    fs.readFile('./db/todoList.json', 'utf8', (err, data) => {
        res.send(data);
    })
})

app.post('/addToList', (req, res) => {
    fs.readFile('./db/todoList.json', 'utf8', (err, data) => {
        if (err) {
            res.send('{"result": 0}');
        } else {
            const list = JSON.parse(data);
            const todo = req.body;
            list.push(todo);

            fs.writeFile('./db/todoList.json', JSON.stringify(list), (err) => {
                if (err){
                    res.send('{ "result": 0}');
                } else {
                    res.send('{ "result": 1}');
                }
            })
        }
    })
})

app.delete('/deleteTodo', (req, res) => {
    fs.readFile('./db/todoList.json', 'utf8', (err, data) => {
        if (err){
            res.send('{ "result": 0}');
        } else {
            let list = JSON.parse(data);
            const item = req.body;
            list = list.filter(todoItem => item.id !== todoItem.id);

            fs.writeFile('./db/todoList.json', JSON.stringify(list), (err) => {
                if (err){
                    res.send('{ "result": 0}');
                } else {
                    res.send('{ "result": 1}');
                }
            })
        }
    })
});


app.delete('/deleteAll', (req, res) => {
    fs.readFile('./db/todoList.json', 'utf8', (err, data) => {
        if (err){
            res.send('{ "result": 0}');
        } else {
            let list = JSON.parse(data);
            list.length = 0;

            fs.writeFile('./db/todoList.json', JSON.stringify(list), (err) => {
                if (err){
                    res.send('{ "result": 0}');
                } else {
                    res.send('{ "result": 1}');
                }
            })
        }
    })
});
app.listen(3000, () => {
    console.log('Server started on port 3000')
})