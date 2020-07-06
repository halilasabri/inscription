const express = require('express');
const router = express.Router();
const userController = require('../controller/Users/userController');


/** Admin router *****************************************************************************************************/
router.post('/register',userController.register);
module.exports = router;
