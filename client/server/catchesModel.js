const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const catches = new Schema({
    catchlocation: {
    type: String,
    allowNull: false,
    trim: true
    },
    fishspecies: {
    type: String,
    allowNull: false,
    trim: true 
    },
    weight: {
    type: String,
    allowNull: false,
    trim: true
    },
    length: {
    type: String,
    allowNull: false,
    trim: true
    }
});

module.exports = mongoose.model("catches", catches);
module.exports = catches;