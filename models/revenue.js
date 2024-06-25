const mongoose = require("mongoose");
const {} = require("express/lib/response");

const revenueHistorySchema = mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId, ref: 'user',
        required: true
    },
    revenue: {
        type: Number,
        required: true
    },
    vehicleNumber: {
        type: String,
        required: true
    },
    
},
{timestamps: true});

module.exports = mongoose.model("revenue", revenueHistorySchema);
