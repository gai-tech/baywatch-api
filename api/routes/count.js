const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');

const parkCount = require('../models/parkCount');
const Pool = require('pg').Pool

const pool = new Pool({
    user: 'admin',
    host: '127.0.0.1',
    database: 'elements',
    password: 'admin',
    port: 2223
})


// router.get('/', (req, res, next) => {
//     res.status(200).json({
//         message: 'Handling GET requests to /count'
//     });
// });

router.post('/:parkID', (req, res, next) => {
    const id = req.params.parkID;
    const count = req.body.count;
    // const count = new parkCount({
    //     name: id,
    //     count: req.body.count
    // })
    // count.save().then(result => {
    //     console.log(result);
    //     res.status(201).json({
    //         message: 'New number of cars posted'
    //     });
    // })
    //.catch(err => console.log(err));

    pool.query('INSERT INTO iot.iot_node (node_id, node_name) VALUES ($1, $2)', [2, id], (error, res) => {
        if (error) {
          throw error
        }
        res.status(200).json({
            message: 'Handling POST user added with ID: ${res.rows[0].id}'
        });
        //res.status(201).send(`User added with ID: ${res.rows[0].id}`)
    })
    // res.status(200).json({
    //     message: 'New number of cars posted'
    // });
});




router.get('/:parkID', (req, res, next) => {
    const id = req.params.parkID;
    parkCount.findById(id).exec().then(doc =>{
        // parkCount.col.find().sort({"datetime": -1}).limit(1) - maybe use for latest count
        console.log(doc);
        res.status(200).json(doc);
    }).catch(err => {
        console.log(err);
        res.status(500).json({error:err});
    });    
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