const mongoose = require('mongoose');
const {Schema} = mongoose;

const NotasShema =  new Schema({
    Titulo:{type: String, require: true},
    Descripcion:{type: String, require: true},
    Estado:{type: String, require: true},
    Usuario:{type: String, require: true}
});
module.exports =  mongoose.model('Notas',NotasShema);
