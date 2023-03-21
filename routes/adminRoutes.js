const express = require('express')
const adminController = require('../controllers/adminController')
const adminRouter = express.Router()

adminRouter.get('/getallusers', adminController.getAllUsers)
adminRouter.get('/edituser/:id', adminController.getUserData )
adminRouter.post('/createuser', adminController.createNewEmployee );
adminRouter.put('/edituser/:id', adminController.updateEmployeeById)
adminRouter.delete('/removeuser/:id', adminController.removeEmployee)
adminRouter.get('/check', adminController.adminAuthCheck)
adminRouter.get('/getallrequests', adminController.getAllRequests)
adminRouter.get('/getrequest/:id', adminController.getRequest)
adminRouter.get('/allowrequest/:id', adminController.allowRequest)
adminRouter.get('/rejectrequest/:id', adminController.rejectRequest)
adminRouter.post('/createrequest', adminController.createRequest)
module.exports = adminRouter;