const mongoose = require('mongoose');

const parkCountSchema = mongoose.Schema({
    time : { type : Date, default: Date.now },
    park: String,
    count: Number
});

module.exports = mongoose.model('parkCount', parkCountSchema);