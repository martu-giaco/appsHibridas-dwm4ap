//const usuarioRouter = require('./usuarioRouter');
import usuarioRouter from './usuarioRouter.js';

const routerAPI = (app) =>{
    app.use('/api/usuarios', usuarioRouter);
}

//module.exports = routerAPI;
export default routerAPI;