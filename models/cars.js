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
        {type : String},
    ],
    milage:[ {
         type: Number,
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
    rcStatus :{
        type:Boolean,
        required: true
    },
    bookingHistory: [
        {timestamp:{
            type:Date
        }}
    ],
    numberOfTrips: {
        type: Number,
        default: 0
    },
    price:{
        type:Number,
        required: true
    },
    ownerId:{
        type: mongoose.Schema.Types.ObjectId, ref: 'user'
    },
    vehicleVerification: {
        type:Boolean,
        default: false
    },
    vehicleStatus:{
        type:Boolean,
        default: false
    },
    isBooked:{
        type:Boolean,
        default: false
    }

},
{
    timestamps: true
});

module.exports = mongoose.model("cars", carSchema);
