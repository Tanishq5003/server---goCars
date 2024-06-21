const { response } = require("express");
const User = require("../models/user");

async function handelUserSignup(req, res){
    const {name, email, password, mobile} = req.body;

    await User.create({
        name,
        email,
        password,
        mobile
    });
    return res.status(200).json({response : "Success"});
};

async function handelUserLoginEmail(req,res){
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

async function handleUserLoginMobile(req, res){
    const {mobile, password} = req.body;
    const user = await User.findOne({ mobile, password})
    if(!user){
    return res.status(401).json({
        response : "Invalid Credentials"
    });
    }
    else{
    res.status(200).json({
        response: "Success"
    });
    }
}

async function handleForgotPasswordEmail(req,res){
    const {email, password} = req.body;
    await User.findOneAndUpdate({email}, {$set: {password}});
    return res.status(200).json({response: "Password Reset Successfully"})
}

async function handleForgotPasswordMobile(req,res){
    const {mobile, password} = req.body;
    await User.findOneAndUpdate({mobile}, {$set: {password}});
    return res.status(200).json({response: "Password Reset Successfully"})
}

module.exports = {
    handelUserSignup,
    handelUserLoginEmail,
    handleUserLoginMobile,
    handleForgotPasswordEmail,
    handleForgotPasswordMobile
}