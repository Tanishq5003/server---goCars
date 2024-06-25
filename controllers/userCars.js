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
    const carId = car._id;
    try{
    const userCars = await UserCars.findOneAndUpdate(
        { user: ownerId },
        {$push : {car : carId}},
        {upsert : true}
    );
    }catch(error){
        console.log("Error in adding car to userCars", error);
        return res.status(401);
    }
    return res.status(200).json({response: "Car created successfully and added to userCars"});
}
catch(error){
    console.error(error);
    return res.status(400);
}
};

module.exports = {
    handleAddCar
}