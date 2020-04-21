const mongoose = require('mongoose')

const schemaInversionista = mongoose.Schema({
    name: {
        type: String,
    },
    last_name:{
        type: String,
    },
    birth_date:{
        type: Date,
    },
    is_active:{
        type: Boolean,
        default:false
    },
    date_registro:{
        type: Date,
    },
    num_tarjeta:{
        type:Number,
    },
    liquidez:{
        type:Number,
    },
    foto:{
        type:String
    }

});

const Inversionista = mongoose.model('inversionista', schemaInversionista);

module.exports = Inversionista;