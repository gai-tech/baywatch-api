const express = require('express');
const app = express();
const morgan = require('morgan');
//const mongoose = require('mongoose');

const countRoutes = require('./api/routes/count');
const dataRoutes = require('./api/routes/data');

// mongoose.connect('mongodb+srv://admin:' + process.env.MONGO_ATLAS_PW + '@baywatch-mayvd.mongodb.net/test?retryWrites=true&w=majority', {
//    useMongoClient: true 
// });

app.use(morgan('dev'));
app.use(express.urlencoded({extended: false}));
app.use(express.json());

app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization');
    if (req.method === 'OPTIONS') {
        res.header('Access-Control-Allow-Methods', 'PUT, POST, PATCH, DELETE, GET');
        return res.status(200).json({});
    }
    next();
});

// Routes
app.use('/count', countRoutes);
app.use('/data', dataRoutes);

app.use((req, res, next) => {
    const error = new Error('not found');
    error.status= 404;
    next(error);
})

app.use((error, req, res, next) => {
    res.status(error.status || 500);
    res.json({
        error: {
            message: error.message
        }
    });
});

module.exports = app;