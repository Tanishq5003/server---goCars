const express = require("express");
const router = express.Router();

const {restrictToLoggedInUserOnly} = require("../middlewares/auth")
const {handleGetAllActiveAvailbleCars, handleSelectedCar} = require("../controllers/cars");

router.get("/", handleGetAllActiveAvailbleCars);
router.get("/viewCar", handleSelectedCar);

module.exports = router;