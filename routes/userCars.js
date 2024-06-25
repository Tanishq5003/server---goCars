const express = require("express");
const router = express.Router();
const {restrictToLoggedInUserOnly} = require("../middlewares/auth");
const {handleAddCar} = require("../controllers/userCars");

router.post("/registerCar",restrictToLoggedInUserOnly, handleAddCar);

module.exports = router;