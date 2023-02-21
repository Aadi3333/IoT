const mongoose = require('mongoose');

const Device = require('./models/device');

module.exports = mongoose.model('Device', new mongoose.Schema({
    id: String,
    name: String,
    user: String,
    sensorData: Array
}, { collection: 'topic4' }));