require('dotenv').config();
const {TOKEN_SECRET, ACCESS_TOKEN_EXPIRATION_TIME, REFRESH_TOKEN_EXPIRATION_DATE} = process.env;
const User = require('../models/userModel')
const jwt = require('jsonwebtoken');

const generateTokenResponse = (userData) => ({
    accessToken: jwt.sign(userData, TOKEN_SECRET, {expiresIn: +ACCESS_TOKEN_EXPIRATION_TIME}),
    refreshToken: jwt.sign(userData, TOKEN_SECRET, {expiresIn: +REFRESH_TOKEN_EXPIRATION_DATE})
})

exports.login = (req, res) => {
    const email = req.body.email;
    const password = req.body.password;
    const user = User.getUserByEmail(email)
    if (user.password === password) {
        const {password, ...userWithoutPassword} = user;
        const response = generateTokenResponse(userWithoutPassword);
        res.status(200).send(response);
    }

    res.status(401).send();

}

exports.logout = (req, res) => {
    res.status(200);
    res.send();
}

exports.getNewToken = (req, res) => {
    const token = req.body.refreshToken;
    if(!token) res.status(400).send();
    try {
        const validToken= jwt.verify(token, TOKEN_SECRET)
        const { iat, exp, ...newTokenData} = validToken;
        console.warn(newTokenData);
        const response = generateTokenResponse(newTokenData);
        res.status(200).send(response);
    } catch (e) {
        console.warn(e)
        if(e.name === 'JsonWebTokenError' || e.name === 'TokenExpiredError') res.status(401).send(e.message);
        res.status(500).send()
    }

}
