const express = require('express')
const adminController = require('../controllers/adminController')
const adminRouter = express.Router()

adminRouter.get('/getallusers', adminController.getAllUsers)
adminRouter.get('/edituser/:id', adminController.getUserData )
adminRouter.post('/createuser', adminController.createNewEmployee );
adminRouter.put('/edituser/:id', adminController.updateEmployeeById)
adminRouter.delete('/removeuser/:id', adminController.removeEmployee)


module.exports = adminRouter;