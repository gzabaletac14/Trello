const mongoose = require('mongoose');
const Uri = 'mongodb://localhost/Trello'

mongoose.connect(Uri,{
    useCreateIndex: true,
    useNewUrlParser:true,
    useFindAndModify:false,
    useUnifiedTopology:true
})
.then (bd => console.log('BD Conectada.'))
.catch(err => console.log(err));

module.exports = mongoose;


