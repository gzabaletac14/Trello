const express = require('express');
const app = express();
const pach = require('path');
const morgan = require('morgan');
const { mongoose } =  require('./Database');

//setting
app.set('port', process.env.PORT || 3000);

//middlewares
app.use(morgan('dev'));
app.use(express.json());
//router
app.use(require('./Router/Notas'));
//public static


//Puerto del Servidor
app.listen(app.get('port'),()=>{
    console.log('Server corriendo en el puerto:',app.get('port'))
});