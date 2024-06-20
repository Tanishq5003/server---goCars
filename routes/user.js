const experss = require("express");
const {handelUserSignup} = require("../controllers/user");

const router = experss.Router();

router.post("/", handelUserSignup);

module.exports = router;