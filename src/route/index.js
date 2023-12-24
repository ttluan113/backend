const UserRouter = require('./UserRouter')
const SourceRouter = require('./SourceRouter')


function route(app){
    //ControllerUser
    app.post('/login', UserRouter);

    app.post('/reg' , UserRouter);

    app.post('/logout' , UserRouter);

    app.get('/getuser'  , UserRouter);

    app.put('/edituser' , UserRouter);

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

}

module.exports = route;