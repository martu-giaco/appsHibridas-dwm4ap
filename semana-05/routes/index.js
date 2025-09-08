//const usuarioRouter = require('./userRouter');
import usuarioRouter from './userRouter.js';

const routerAPI = (app) =>{
    app.use('/api/usuarios', usuarioRouter);
}

//module.exports = routerAPI;
export default routerAPI;