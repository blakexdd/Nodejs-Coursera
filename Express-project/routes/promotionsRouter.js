const express = require('express');
const body_parser = require('body-parser');
const Promotions = require('../models/promotions');
const mongoose = require('mongoose');

const promotionsRouter = express.Router();

promotionsRouter.use(body_parser.json());

promotionsRouter.route('/')
.get((req, res, next) => {
    Promotions.find({}).
    then((promotions) => {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');

        res.json(promotions);
    }, (err) => next(err));
})
.post((req, res, next) => {
    Promotions.create(req.body)
    .then((promotion) => {
        console.log('Promotions created: ', promotion);
        
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        res.json(promotion);
    }, (err) => next(err))
})
.put((req, res, next) => {
    res.statusCode = 403;
    res.end(`Method: ${req.method} is not supported for /promotions!`);
})
.delete((req, res, next) => {
    Promotions.remove({})
    .then((resp) => {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        res.json(resp);
    }, (err) => next(err))
    .catch((err) => next(err));
});

promotionsRouter.route('/:promotionsId')
.get((req, res, next) => {
    Promotions.findById(req.params.promotionsId)
    .then((promotion) => {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        res.json(promotion);
    }, (err) => next(err))
    .catch((err) => next(err));
})
.post((req, res, next) => {
    res.statusCode = 403;
    res.end(`Method: ${req.method} is not supported for /promotions/${req.params.promotionsId}`);
})
.put((req, res, next) => {
    Promotions.findOneAndUpdate(req.params.promotionsId,
        { $set : req.body }, { new: true})
        .then((promotion) => {
            res.statusCode = 200;
            res.setHeader('Content-Type', 'application/json');
            res.json(promotion);
        }, (err) => next(err))
        .catch((err) => next(err));
})
.delete((req, res, next) => {
    Promotions.findByIdAndRemove(req.params.promotionsId)
    .then((resp) => {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        res.json(resp);
    }, (err) => next(err))
    .catch((err) => next(err));
});

module.exports = promotionsRouter;