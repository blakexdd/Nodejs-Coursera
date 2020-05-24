const express = require('express');
const http = require('http');
const body_parser = require('body-parser');
const dishesRouter = require('./routes/dishesRouter');
const leadersRouter = require('./routes/leadersRouter');
const promotionsRouter = require('./routes/promotionsRouter');
const mongoose = require('mongoose');
const assert = require('assert');

const url = 'mongodb://localhost:27017/';
const connect = mongoose.connect(url);

connect.then((db) => {
    console.log("Connected correctly to the server");
}, (err) => {
    console.log(err);
})

const app = express();

app.use(body_parser.json());

app.set('port', process.env.PORT || 3000);

app.use('/dish', dishesRouter);
app.use('/leaders', leadersRouter);
app.use('/promotions', promotionsRouter);

app.get('/', (req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html');

    res.end('<html><title>Main page</title><body><h1>Welcome to main page</h1></body></html>');
});

const server = app.listen(app.get('port'), () => {
    console.log(`Running app at ${app.get('port')} port`);
});
