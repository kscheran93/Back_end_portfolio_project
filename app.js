const express = require('express');
const mongoose = require('mongoose');
const Product = require('./models/productModule');
const app = express();

app.use(express.json())

// Routes

app.get('/', (req, res) => {
    res.send('api is in progress');
})
app.get('/products', async (req, res) => {
    try {
         const product = await Product.find({})
         res.status(200).json(product);
    } catch(err){
        res.status(500).json({message: err.message});
    }
})

app.post('/product', async(req, res) => {
try {
    const product = await Product.create(req.body)
    res.status(200).json(product)
} catch (err) {
    console.log(err.message);
    res.status(500).json({message: err.message});
}
})


mongoose.connect('mongodb+srv://kscheran93:vasanthi9553@cluster0.qbevnnf.mongodb.net/node-API?retryWrites=true&w=majority').then(
    ()=>{
        console.log('connect to MongoBD')
        
app.listen(3000, ()=>{
    console.log('This project is running on port 3000')
});
    }
).catch((err)=>{
    console.log(err)
})


