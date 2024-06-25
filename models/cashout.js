const mongoose = require("mongoose");
const {} = require("express/lib/response");

const cashOutSchema = new mongoose.Schema({
    cash: {
        type: Number,
        required: true
    },
    user : {
        type: mongoose.Schema.Types.ObjectId, ref: 'user',
        required: true
    }
},
{timestamps: true});

module.exports = mongoose.model("cashout", cashOutSchema);