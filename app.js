const express = require('express');
const mongoose = require('mongoose');
const app = express();

app.use(express.json())

// Routes

app.get('/', (req, res) => {
    res.send('api is in progress');
})

app.post('/product', (req, res) => {
  console.log(req.body)
  res.send(req.body);
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


