const mongoose = require("mongoose");
const {type} = require("express/lib/response");

const bookingHistorySchema = new mongoose.Schema({
    user : {
        type : mongoose.Schema.Types.ObjectId, ref : 'user',
        required : true
    },
    vehicleNumber : {
        type : String,
        required : true
    },
    pickupTime : {
        type : Date,
        default: Date.now()
    },
    dropTime : {
        type : Date
    },
    revenue : {
        type : Number
    }
});

mongoose.exports = mongoose.model("bookingHistory", bookingHistorySchema);
