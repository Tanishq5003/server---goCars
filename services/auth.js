const jwt = require("jsonwebtoken");

const secret = "goCars!@#$%Tanishq&*Secretkey";

function setUser(user){
    return jwt.sign({
        _id: user._id,
        email: user.email,
        name: user.name,
        userType: user.userType
    }, secret);
}

function getUser(token){
    if(!token){
        return null;
    }
    return jwt.verify(token, secret);
}

module.exports = {
    setUser,
    getUser
}