const User = require("../models/user");

async function handelUserSignup(req, res){
    const {name, email, password} = req.body;
    await User.create({
        name,
        email,
        password
    });
    return res.status(200).json({response : "Success"});
};

async function handelUserLogin(req,res){
    const {email, password} = req.body;
    const user = await User.findOne({ email, password})
    if(!user){
        res.status(401).json({
            response : "Invalid Credentials"
        });
    }
    else{
        res.status(200).json({
            response : "Success",
        });
    }
}

module.exports = {
    handelUserSignup,
    handelUserLogin
}