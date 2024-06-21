const User = require("../models/user")

async function passwordValidation(req,res, next){
    const {password} = req.body;
    try{
    if(password.length<=8){
        return res.status(401).json({response: "Password must be at least 8 characters long"});
    }
    let cap = false;
    let num = false;
    let spec = false;
    for(let i = 0; i<password.length; i++){
        if(/[A-Z]/.test(password[i])){
            cap = true;
        }
        else if(/[0-9]/.test(password[i])){
            num = true;
        }
        else if(/[!@#$%^&*()-_+~`/?]/.test(password[i])){
            spec = true;
        }

        if(cap && num && spec){
            break;
        }
    }

    if(!cap || !num || !spec){
        console.log(`cap: ${cap}, num: ${num}, spec; ${spec}`);
       return res.status(401).json({response: "Password must contain at least one uppercase letter, Number and a Special Character"});
    }
    next();
}
catch(error){
    res.status(500).json({response: "Internal Server Error"});
}
}

async function uniqueUser(req,res,next){
    try{
    const {email, mobile} = req.body;
    const mail = await User.findOne({email});
    const mob = await User.findOne({mobile});
    if(mail || mob){
        return res.status(401).json({response: "User already exists with this email or mobile"});
    }
    next();
}
catch(error){
    console.error(error);
}
}

async function userExistsMail(req, res, next){
    try {
        const {email} = req.body;
        const user = await User.findOne({email});
        if (!user) {
            return res.status(401).json({response: "User does not exist"});
        }
        next();
    }catch(error){
        console.error(error);
    }
}

async function userExistsMobile(req, res, next){
    try {
        const {mobile} = req.body;
        const user = await User.findOne({mobile});
        if (!user) {
            return res.status(401).json({response: "User does not exist"});
        }
        next();
    }catch(error){
        console.error(error);
    }
}

module.exports = {
    passwordValidation,
    uniqueUser,
    userExistsMail,
    userExistsMobile
}