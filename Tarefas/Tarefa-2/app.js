const express = require('express');

const app = express();

app.use('/users',(req, res, next) => {
    console.log('In the second middleware');
    res.send('<h1>Users route</h1>')
});

app.use('/',(req, res, next) => {
    console.log('In the first middleware');
    res.send('<h1>Fisrt route</h1>');
});


app.listen(8000);