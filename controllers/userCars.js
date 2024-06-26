const {response} = require("express");

const Cars = require("../models/cars");
const Users = require("../models/user");
const cashout = require("../models/cashout");
const revenue = require("../models/revenue");
const UserCars = require("../models/userCars");

const mongoose = require("mongoose")


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

async function handleActivateCar(req, res){
    try{
        const user = req.user;
        const ownerId = user._id;
        const {time, vehicleStatus, carId} = req.body;
        const objectId = new mongoose.Types.ObjectId(carId);
        const millis = time*60*60*1000;
        const updatedCar = await Cars.findByIdAndUpdate( objectId, {vehicleStatus}, {new: true});
        console.log("Activated")
        setTimeout( async() => {
            try{
                await Cars.findByIdAndUpdate(carId, {$set :{vehicleStatus : false}}, {new: true});
            }catch(error){
                console.error("Error in deactivating car", error);
            }
        }, millis);
        return res.status(200).json({response: "Car activated successfully"});
    }catch(error){
        console.error(error);
        return res.status(500);
    }
};

async function handleGetAllCars(req,res){
    try{
        const user = req.user;
        const ownerId = user._id;
        const userCars = await UserCars.find({user: ownerId}).populate('car').populate('user', 'name');
        if(!userCars){
            return res.status(200).json({response : "No Cars registered by this user"});
        }else{
            return res.status(200).json(userCars)
        }
    }catch(error){
        console.error(error);
        return res.status(500);
    }
}

module.exports = {
    handleAddCar,
    handleActivateCar,
    handleGetAllCars
}