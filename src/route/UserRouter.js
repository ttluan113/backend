const express = require('express');
const router = express.Router();

const UserController = require('../controller/user/UserController');
const middleware = require('../controller/middleware/Middleware');

router.use('/login'  , UserController.Login);


router.use('/reg'  , UserController.Register);

router.use('/getusers'  , UserController.GetAllUser);

router.use('/edituser/:slug' , middleware.verifyTokenAdmin , UserController.EditUser);

router.use('/deleteuser/:id' , middleware.verifyTokenAdmin , UserController.DeleteUser);




module.exports = router;