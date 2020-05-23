const express = require('express');
const body_parser = require('body-parser');

const dishesRouter = express.Router();

dishesRouter.route('/')
.all((req, res, next) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');

    console.log(req.headers);

    next();
})
.get((req, res, next) => {
    res.end('Getting all dishes for you!');
})
.post((req, res, next) => {
    res.end(`Setting dish with name: ${req.body.name} and description: ${req.body.description}`);
})
.put((req, res, next) => {
    res.statusCode = 403;
    res.end(`Method: ${req.method} is not supported for /dishes!`);
})
.delete((req, res, next) => {
    res.end("Deleting dishes for you!");
});

dishesRouter.route('/:dishId')
.all((req, res, next) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');

    next();
})
.get((req, res, next) => {
    res.end(`Your dish ${req.params.dishId} has name: ${req.body.name} and description: ${req.body.description}`);
})
.post((req, res, next) => {
    res.statusCode = 403;
    res.end(`Method: ${req.method} is not supported for /dish/${req.params.dishId}`);
})
.put((req, res, next) => {
    res.end(`Updating your dish ${req.params.dishId} with name: ${req.body.name} and description: ${req.body.description}`);
})
.delete((req, res, next) => {
    res.end(`deleting dish ${req.params.dishId} for you!`);
});

module.exports = dishesRouter;