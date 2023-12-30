const express = require('express');
const router = express.Router();

const UserController = require('../controller/user/UserController');
const middleware = require('../controller/middleware/Middleware');

router.use('/login'  , UserController.Login);


router.use('/reg'  , UserController.Register);

<<<<<<< HEAD
router.use('/getusers', middleware.verifyTokenAdmin  , UserController.GetAllUser);
=======
router.use('/getusers' , middleware.verifyTokenAdmin , UserController.GetAllUser);
>>>>>>> 230cac3872260ab7e88ef992449bcc731d45612c

router.use('/edituser/:slug' , middleware.verifyTokenAdmin , UserController.EditUser);

router.use('/deleteuser/:id' , middleware.verifyTokenAdmin , UserController.DeleteUser);

<<<<<<< HEAD


=======
router.use('/getuser/:slug' , UserController.GetOneUser)
>>>>>>> 230cac3872260ab7e88ef992449bcc731d45612c

module.exports = router;
