const mongoose = require("mongoose");
const {response} = require("express")

const cars = require("../models/cars");

async function handelGetAllUnVerifiedCars(req, res){
    try{
        const cars = await cars.find({vehicleVerification: false}).exec();
        if(!cars){
            return res.status(404).json({message: "No cars found!"});
        }
        else{
            return res.status(200).json(cars);
        }
    }catch(error){
        console.error(error);
        res.status(500).send("Internal Server Error");
    }
}

async function handleUpdateVehicleVerification(req,res){
    try{
        const {carId} = req.body;
        const objectId = new mongoose.Types.ObjectId(carId);
        const car = await cars.findOneAndUpdate(objectId, {vehicleVerification : true}, {new: true});
        if(!car){
            return res.status(404).json({message: "No car found!"});
        }
        return res.status(200).json({response: "Vehicle Verified Successfully"});
    }catch(error){
        console.error(error);
        res.status(500).send("Internal Server Error");
    }
}

module.exports = {
    handelGetAllUnVerifiedCars,
    handleUpdateVehicleVerification
}