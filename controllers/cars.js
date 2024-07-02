const mongoose = require("mongoose");
const {response} = require("express");

const cars = require("../models/cars");

async function handleGetAllActiveAvailbleCars(req, res){
    try{
        const car = await cars.find({vehicleStatus: true, vehicleVerification: true}).exec();
        if(!car){
            return res.status(404).json({message: "No cars found"});
        }
        else{
            return res.status(200).json(car);
        }
    }catch(error){
        console.error(error);
        return res.status(500).json({message: "Internal server error"});
    }
};

async function handleSelectedCar(req , res){
    try{
        const {carID} = req.body;
        const objectId = new mongoose.Types.ObjectId(carID);
        const car = await cars.findById(objectId).exec();
        if(!car) return res.status(404).json({response : "Car not found"});
        else return res.status(200).json(car);
    }catch(error){
        console.error(error);
        return res.status(500).json({message: "Internal server error"});
    }
}

module.exports = {
    handleGetAllActiveAvailbleCars,
    handleSelectedCar
}