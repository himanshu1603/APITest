const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// create schema
const ProcessSchema = new Schema({
    date: {
        type: Date,
        default: Date.now
    },
    method : {
        type: String,
        required :true
    },
    headers : {
        type: Array
    },
    path : {
        type: String,
        required: true
    },
    query : {
        type: Object
    },
    body : {
        type: Object
    },
    duration : {
        type: Number,
        required: true
    }
});

module.exports =  Process = mongoose.model("process", ProcessSchema);