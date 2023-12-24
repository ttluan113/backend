const express = require('express');
const router = express.Router();

const UserController = require('../controller/user/UserController');
const middleware = require('../controller/middleware/Middleware');

router.use('/login'  , UserController.Login);


router.use('/reg'  , UserController.Register);

router.use('/getuser'  , UserController.GetAllUser);

router.use('/edituser' , middleware.verifyTokenAdmin , UserController.EditUser);

router.use('/deleteuser/:id' , middleware.verifyTokenAdmin , UserController.DeleteUser);



module.exports = router;