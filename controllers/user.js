const User = require("../models/user");

async function handelUserSignup(req, res){
    const {name, email, password} = req.body;
    await User.create({
        name,
        email,
        password
    });
    return res.json({response : "Success"})
}

module.exports = {
    handelUserSignup,
}