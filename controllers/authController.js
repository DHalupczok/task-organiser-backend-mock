require('dotenv').config();
const {TOKEN_SECRET, ACCESS_TOKEN_EXPIRATION_TIME, REFRESH_TOKEN_EXPIRATION_DATE} = process.env;
const User = require('../models/userModel')
const jwt = require('jsonwebtoken');

exports.login = (req, res) => {
    const email = req.body.email;
    const password = req.body.password;
    const user = User.getUserByEmail(email)
    if (user.password === password) {
        const {password, ...userWithoutPassword} = user;
        const response = {
            accessToken: jwt.sign(userWithoutPassword, TOKEN_SECRET, {expiresIn: +ACCESS_TOKEN_EXPIRATION_TIME}),
            refreshToken: jwt.sign(userWithoutPassword, TOKEN_SECRET, {expiresIn: +REFRESH_TOKEN_EXPIRATION_DATE})
        }
        res.status(200).send(response);
    }

    res.status(401).send();

}

exports.logout = (req, res) => {
    res.status(200);
    res.send();
}

exports.getNewToken = (req, res) => {

    res.status(200);
    res.send();
}
