const express = require('express');
const body_parser = require('body-parser');

const promotionsRouter = express.Router();

promotionsRouter.route('/')
.all((req, res, next) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');

    console.log(req.headers);

    next();
})
.get((req, res, next) => {
    res.end('Getting all promotions for you!');
})
.post((req, res, next) => {
    res.end(`Setting promotions with name: ${req.body.name} and prom_desc: ${req.body.prom_desc}`);
})
.put((req, res, next) => {
    res.statusCode = 403;
    res.end(`Method: ${req.method} is not supported for /promotions!`);
})
.delete((req, res, next) => {
    res.end("Deleting promotions for you!");
});

promotionsRouter.route('/:promotionsId')
.all((req, res, next) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');

    next();
})
.get((req, res, next) => {
    res.end(`Your promotions ${req.params.promotionsId} has name: ${req.body.name} and prom_desc: ${req.body.prom_desc}`);
})
.post((req, res, next) => {
    res.statusCode = 403;
    res.end(`Method: ${req.method} is not supported for /promotions/${req.params.promotionsId}`);
})
.put((req, res, next) => {
    res.end(`Updating your promotions ${req.params.promotionsId} with name: ${req.body.name} and prom_desc: ${req.body.prom_desc}`);
})
.delete((req, res, next) => {
    res.end(`deleting promotions ${req.params.promotionsId} for you!`);
});

module.exports = promotionsRouter;