const { response } = require("express");
const {getUser} = require("../services/auth");

async function restrictToLoggedInUserOnly(req, res, next){
    const userUid = req.headers["Authorization"];
    if (!userUid) {
        return res.status(400);
    }
    const token = userUid.split("Bearer ")[1];
    const user = getUser(token);

    if(!user) return res.status(401).json({response: "Unauthorized"});

    req.user = user;
    next();
}

module.exports = {
    restrictToLoggedInUserOnly
}