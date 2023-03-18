const express = require('express')
const adminController = require('../controllers/adminController')
const adminRouter = express.Router()

// adminRouter.get('/getallusers', )
// adminRouter.get('/edituser/:id', )
adminRouter.post('/createuser', adminController.createNewEmployee );
// adminRouter.put('/edituser/:id',)
// adminRouter.delete('/removeuser',)


module.exports = adminRouter;