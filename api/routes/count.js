const express = require('express');
const router = express.Router();

router.get('/', (req, res, next) => {
    res.status(200).json({
        message: 'Handling GET requests to /count'
    });
});

router.post('/', (req, res, next) => {
    res.status(201).json({
        message: 'Handling POST requests to /count'
    });
});

router.get('/:countID', (req, res, next) => {
    const id = req.params.countID;
    if (id == 'library') {
        res.status(200).json({
            message: 'Handling GET Library Park requests to /count'
        });
    } else if (id == 'medicine') {
        res.status(200).json({
            message: 'Handling GET Medicine Park requests to /count'
        });
    } else if (id == 'uni-hall') {
        res.status(200).json({
            message: 'Handling GET Uni Hall Park requests to /count'
        });
    } else {
        res.status(200).json({
            message: 'Handling error requests to /count'
        });
    }    
});

router.patch('/:countID', (req, res, next) => {
    const id = req.params.countID;
    if (id == 'library') {
        const newCount = {
            number: req.body.count
        };
        res.status(200).json({
            message: 'Handling PATCH Library Park requests to /count'
        });
    } else if (id == 'medicine') {
        res.status(200).json({
            message: 'Handling PATCH Medicine Park requests to /count'
        });
    } else if (id == 'uni-hall') {
        res.status(200).json({
            message: 'Handling PATCH Uni Hall Park requests to /count'
        });
    } else {
        res.status(200).json({
            message: 'Handling error requests to /count'
        });
    }    
});

module.exports = router;