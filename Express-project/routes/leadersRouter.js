const express = require('express');
const body_parser = require('body-parser');

const leadersRouter = express.Router();

leadersRouter.route('/')
.all((req, res, next) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');

    console.log(req.headers);

    next();
})
.get((req, res, next) => {
    res.end('Getting all leaders for you!');
})
.post((req, res, next) => {
    res.end(`Setting leader with name: ${req.body.name} and score: ${req.body.score}`);
})
.put((req, res, next) => {
    res.statusCode = 403;
    res.end(`Method: ${req.method} is not supported for /leaders!`);
})
.delete((req, res, next) => {
    res.end("Deleting leaders for you!");
});

leadersRouter.route('/:leaderId')
.all((req, res, next) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');

    next();
})
.get((req, res, next) => {
    res.end(`Your leader ${req.params.leaderId} has name: ${req.body.name} and score: ${req.body.score}`);
})
.post((req, res, next) => {
    res.statusCode = 403;
    res.end(`Method: ${req.method} is not supported for /leaders/${req.params.leaderId}`);
})
.put((req, res, next) => {
    res.end(`Updating your leader ${req.params.leaderId} with name: ${req.body.name} and score: ${req.body.score}`);
})
.delete((req, res, next) => {
    res.end(`deleting leader ${req.params.leaderId} for you!`);
});

module.exports = leadersRouter;