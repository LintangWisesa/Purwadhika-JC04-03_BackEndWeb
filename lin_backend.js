const express = require('express');
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.json());

app.get('/api', function(req, res){
    console.log('Ini GET request');
    res.send({pesan:'Ini GET'}); 
});

app.post('/api', function(req, res){
    console.log(req.body);
    console.log('Ini POST request');
    res.send({
        type: 'POST',
        nama: req.body.nama,
        usia: req.body.usia
    });
});

app.put('/api/:id', (req, res)=>{
    console.log('Ini PUT request');
    res.send({pesan:'Ini PUT!'});
});

app.delete('/api/:id', (req, res)=>{
    console.log('Ini DELETE request');
    res.send({pesan:'Ini DELETE!'});
});

app.listen(3210, function(){
    console.log('Running di port 3210!');
});
