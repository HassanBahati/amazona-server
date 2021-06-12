// imports 
const express = require('express')
const data = require('./data.js')

// instaiting express 
const app = express();

// root handler 
app.get('/', (req,res) =>{
    res.send('Server is ready')
});

app.get('/api/products', (req,res) =>{
    res.send(data.products);
})

// setting port
app.listen(5000, ()=>{
    console.log('Server running at port 5000')
});