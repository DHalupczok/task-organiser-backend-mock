const express = require('express');

const authController = require('../controllers/authController')

const router = express.Router();

router.post('/login',authController.login)
router.post('/logout',authController.logout)
router.post('/token',authController.getNewToken)

module.exports = router;

