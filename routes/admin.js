const express = require("express");
const router = express.Router();
const {restrictToAdminOnly  } = require("../middlewares/auth");
const { handelGetAllUnVerifiedCars, handleUpdateVehicleVerification } = require("../controllers/admin");

router.get("/allUnVerifiedCars",restrictToAdminOnly, handelGetAllUnVerifiedCars);
router.patch("/verifyCar", restrictToAdminOnly, handleUpdateVehicleVerification);

module.exports = router;