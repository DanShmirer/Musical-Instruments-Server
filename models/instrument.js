
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Instrument = new Schema({
    name : {type: String, required: true},
    brand : {type: String, required: true},
    category : {type: String, required: false},
    description : {type: String, required: true},
    address : {type: String,required: true}, //TODO: convert to list of addresses
    price : {type: Number, required: true, min: 0}

});

module.exports = mongoose.model('Instrument', Instrument);