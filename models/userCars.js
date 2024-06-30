const mongoose = require("mongoose");
const { type } = require("express/lib/response");
const revenue = require("./revenue");

const userCarsSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId, ref: 'user',
        required: true,
        unique: true
    },
    car: [{
        type: mongoose.Schema.Types.ObjectId, ref: 'cars'
    }],
    revenue:[{
        type: mongoose.Schema.Types.ObjectId, ref: 'revenue'
    }],
    Ballance :{
        type:Number,
        default : 0
    },
    cashout: [{
        type: mongoose.Schema.Types.ObjectId, ref: 'cashout'
    }]
});

module.exports = mongoose.model("userCars", userCarsSchema);