const mongoose = require('mongoose');
const Inversionista = require('./Inversionista');
const Startup = require('./Startup');


const URL_MONGO = 'mongodb+srv://prueba:prueba1234@cluster0-7fvlb.mongodb.net/test?retryWrites=true&w=majority'
mongoose.connect(URL_MONGO,{useNewUrlParser:true}, (err)=> {
    if (!err) console.log('Conexion exitosa');
    else console.log(err);
});

module.exports = {Inversionista, Startup};