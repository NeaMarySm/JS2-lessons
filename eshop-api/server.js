const express = require('express');
const fs = require('fs');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(bodyParser.json());
app.post('/addToCart', (req, res) => {
    fs.readFile('./database/cart.json', 'utf8', (err, data) => {
        if (err){
            res.send('{ "result": 0}');
        } else {
            const cart = JSON.parse(data);
            const item = req.body;
            const alreadyInCart = cart.find(cartItem => cartItem.id_product === item.id_product);
            if (alreadyInCart) {
                alreadyInCart.quantity++;
            } else cart.push({...item, quantity: 1});

            fs.writeFile('./database/cart.json', JSON.stringify(cart), (err) => {
                if (err){
                    res.send('{ "result": 0}');
                } else {
                    res.send('{ "result": 1}');
                }
            })
        }
    })
});
app.delete('/clearCart', (req, res) => {
    fs.readFile('./database/cart.json', 'utf8', (err, data) => {
        if (err){
            res.send('{ "result": 0}');
        } else {
            const cart = JSON.parse(data);
            cart.length = 0;
            fs.writeFile('./database/cart.json', JSON.stringify(cart), (err) => {
                if (err){
                    res.send('{ "result": 0}');
                } else {
                    res.send('{ "result": 1}');
                }
            })
        }
    })
});

app.delete('/deleteFromCart', (req, res) => {
    fs.readFile('./database/cart.json', 'utf8', (err, data) => {
        if (err){
            res.send('{ "result": 0}');
        } else {
            const cart = JSON.parse(data);
            const item = req.body;
            const itemToDelete = cart.find(cartItem => cartItem.id_product === item.id_product);

            if (itemToDelete.quantity > 1){
                    itemToDelete.quantity --;
                }
            else {
                const index = cart.indexOf(itemToDelete);
                cart.splice(index, 1);
            }

            fs.writeFile('./database/cart.json', JSON.stringify(cart), (err) => {
                if (err){
                    res.send('{ "result": 0}');
                } else {
                    res.send('{ "result": 1}');
                }
            })
        }
    })
});
app.get('/catalogData', (req,res) =>{
    fs.readFile('./database/catalog.json', 'utf8',(err, data) => {
        res.send(data);
    })
});

app.get('/cartData', (req,res) =>{
    fs.readFile('./database/cart.json', 'utf8',(err, data) => {
        res.send(data);
    })
});

app.listen(3000,() => {
    console.log('Server started on 3000 port');
});