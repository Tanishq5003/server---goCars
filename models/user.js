const mongoose = require("mongoose");
const {type} = require("express/lib/response");

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    }
    },
    {timestamps: true}
);

module.exports = mongoose.model("user", userSchema);
