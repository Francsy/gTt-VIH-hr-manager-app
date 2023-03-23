const express = require('express')

const userController = require('../controllers/userController')
const userRouter = express.Router()
const { userProtector } = require('../middlewares/verifiedToken')


userRouter.get('/check', userProtector , userController.userAuthChecker)
userRouter.post('/startclock', userProtector, userController.startWorkingDay )
userRouter.get('/checkclock', userProtector, userController.checkWorkingDay )
userRouter.post('/endclock', userProtector, userController.endWorkingDay )
userRouter.post('/createclockrequest', userProtector, userController.createWorkingDayRequest )


module.exports = userRouter;