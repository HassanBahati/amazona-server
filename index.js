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

// products route    
app.get('/api/products', (req,res) =>{
    res.send(data.products);
});

// prod details 
app.get('/api/products/:id', (req, res) => {
    const products = data.products.find((x) => x._id === req.params.id );
    if(product){
        res.send(products)
    }else{
        res.status(404).send({message: 'Product not found'})
    }
});

// setting port
app.listen(port, ()=>{
    console.log(`Server running at port ${port}`)
});