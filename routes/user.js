const experss = require("express");
const {handelUserSignup, handelUserLogin} = require("../controllers/user");

const router = experss.Router();

router.post("/", handelUserSignup);
router.post("/login", handelUserLogin);

module.exports = router;