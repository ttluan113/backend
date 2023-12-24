const express = require('express');
const router = express.Router();

const ModelSource = require('../controller/Source/SourceController');
const middleware = require('../controller/middleware/Middleware');

router.use('/source' , ModelSource.GetSource);

router.use('/sources/:slug' , ModelSource.showOneSource);

router.use('/buycode', middleware.verifyToken , ModelSource.BuyCode);

router.use('/history', middleware.verifyToken , ModelSource.historySource);

router.use('/addsource' , middleware.verifyTokenAdmin  , ModelSource.addSource);

router.use('/editsource/:slug', middleware.verifyTokenAdmin , ModelSource.editSource);

router.use('/deletesource/:slug', middleware.verifyTokenAdmin , ModelSource.deleteSource )




module.exports = router;