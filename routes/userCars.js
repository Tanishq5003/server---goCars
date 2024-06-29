const express = require("express");
const router = express.Router();
const {restrictToLoggedInUserOnly} = require("../middlewares/auth");
const {handleAddCar, handleActivateCar, handleGetAllCars, handleDeleteCar} = require("../controllers/userCars");

router.post("/registerCar",restrictToLoggedInUserOnly, handleAddCar);
router.patch("/activateCar", restrictToLoggedInUserOnly, handleActivateCar);
router.get("/", restrictToLoggedInUserOnly, handleGetAllCars);
router.delete("/deleteCar", restrictToLoggedInUserOnly, handleDeleteCar);

module.exports = router;