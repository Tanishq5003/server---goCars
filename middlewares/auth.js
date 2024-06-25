const { response } = require("express");
const {getUser} = require("../services/auth");

async function restrictToLoggedInUserOnly(req, res, next){
    try{
        // console.log("middleware running");
    const userUid = req.headers["authorization"];
    if (!userUid) {
        return res.status(400);
    }
    const token = userUid.split("Bearer ")[1];
    // console.log(`token is ${token}`);
    const user = await getUser(token);
    // console.log("user extracted");

    if(!user) return res.status(401).json({response: "Unauthorized"});

    req.user = user;
    next();
}
catch(error){
    console.log(error);
    return res.status(500)
}
}

module.exports = {
    restrictToLoggedInUserOnly
}