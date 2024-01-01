const UserRouter = require('./UserRouter')
const SourceRouter = require('./SourceRouter')
const { createProxyMiddleware } = require('http-proxy-middleware');

function route(app){
    //ControllerUser
    app.post('/login', createProxyMiddleware({
        target: 'http://fullstack.pro.vn',
        changeOrigin: true,
      }), UserRouter);

    app.post('/reg' , UserRouter);

    app.post('/logout' , UserRouter);

    app.get('/getusers'  , UserRouter);

    app.put('/edituser/:slug' , UserRouter);

    app.delete('/deleteuser/:id' , UserRouter);


    
    //ControllerSource

    app.get('/source' , SourceRouter);

    app.post('/buycode' , SourceRouter);

    app.get('/sources/:slug' , SourceRouter);

    app.post('/history' , SourceRouter);

    //CRUD Source
    app.post('/addsource' , SourceRouter);

    app.put('/editsource/:slug' , SourceRouter);

    app.delete('/deletesource/:slug' , SourceRouter);

    // main.js

   
}

module.exports = route;