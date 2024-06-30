const experss = require("express");
const {handelUserSignup, handelUserLoginEmail, handleUserLoginMobile,
        handleForgotPasswordEmail, handleForgotPasswordMobile,
        handelAdminSignup
        } = require("../controllers/user");
const {passwordValidation, uniqueUser, userExistsMail, userExistsMobile} = require("../middlewares/SignupValidation")

const router = experss.Router();

router.post("/",passwordValidation, uniqueUser, handelUserSignup);
router.post("/admin", passwordValidation, uniqueUser,handelAdminSignup)
router.post("/login/email", handelUserLoginEmail);
router.post("/login/mobile", handleUserLoginMobile);
router.patch("/forgotPassword/mail", userExistsMail, handleForgotPasswordEmail)
router.patch("/forgotPassword/mobile", userExistsMobile, handleForgotPasswordMobile) 

module.exports = router;