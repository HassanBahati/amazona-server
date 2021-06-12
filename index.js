// imports 
const express = require('express')
const data = require('./data.js')
const port = process.env.PORT || 5000

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
app.listen(port, ()=>{
    console.log(`Server running at port ${port}`)
});