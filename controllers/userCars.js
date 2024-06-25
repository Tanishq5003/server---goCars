const {response} = require("express");

const Cars = require("../models/cars");
const Users = require("../models/user");
const cashout = require("../models/cashout");
const revenue = require("../models/revenue");
const UserCars = require("../models/userCars");


async function handleAddCar(req, res){
    try{
        console.log("handleAddCar reached");
    const user = req.user;
    const ownerId = user._id;
    const {make, varient, fuel, milage, vehicleNumber, pucStatus, insuranceStatus, rcStatus,price} = req.body;
    const car = await Cars.create ({
        make, varient, fuel, milage, vehicleNumber, pucStatus, rcStatus, insuranceStatus, price, ownerId
    });
    return res.status(200).json({response: "Car created successfully"});
}
catch(error){
    console.error(error);
    return res.status(400);
}
};

module.exports = {
    handleAddCar
}