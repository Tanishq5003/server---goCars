const mongoose = require("mongoose");
const {type} = require("express/lib/response");

const carSchema = new mongoose.Schema({
    make: {
        type: String,
        required: true
    },
    varient :{
        type: String,
        required: true
    },
    fuel: [
        {type : String, required: true}, 
    ],
    milage:[ {
         type: Number,
        required: true
    }],
    vehicleNumber:{
        type: String,
        required: true
    },
    pucStatus:{
        type:Boolean,
        required: true
    },
    insuranceStatus:{
        type:Boolean,
        required: true
    },
    rcStaus :{
        type:Boolean,
        required: true
    },
    bookingHistory: [
        {timestamp:{
            type:Date,
            default:Date.now
        }}
    ],
    numberOfTrips: {
        type: Number,
    },
    price:{
        type:Number,
        required: true
    },
    ownerId:{
        type: mongoose.Schema.Types.ObjectId, ref: 'user',
        required: true
    },
    vehicleVerification: {
        type:Boolean
    },
    vehicleStatus:{
        type:Boolean
    },
    isBooked:{
        type:Boolean
    }

},
{
    timestamps: true
});

module.exports = mongoose.model("cars", carSchema);
