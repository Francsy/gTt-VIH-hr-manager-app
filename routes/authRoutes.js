const express = require('express')

const authController = require('../controllers/authController')
const authRouter = express.Router()

authRouter.post('/signup', authController.createNewEmployee);
authRouter.post('/login', authController.authLogin)


module.exports = authRouter;