const express = require('express')

const authController = require('../controllers/authController')
const authRouter = express.Router()

authRouter.post('/login', authController.authLogin)
authRouter.get('/logout', authController.logout)


module.exports = authRouter;