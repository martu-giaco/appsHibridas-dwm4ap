const usuarioRouter = require('./usuarioRouter');
const routerAPI = (app) =>{
    app.use('/api/usuarios', usuarioRouter);
}

module.exports = routerAPI;