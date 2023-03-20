const express = require('express')

const userController = require('../controllers/userController')
const userRouter = express.Router()
const { userProtector } = require('../middlewares/verifiedToken')


userRouter.get('/check', userProtector , userController.userAuthChecker)


module.exports = userRouter;