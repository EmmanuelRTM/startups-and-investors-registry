const mongoose = require('mongoose')

const schemaStartup = mongoose.Schema({
    name: {
        type: String,
    },
    owners:{
        type: {String},
    },
    description:{
        type: String,
    },
    initial_date:{
        type: Date,
    },
    dead_line:{
        type:Date,
    },
    total_investment:{
        type:Number,
    },
    stock_percentage:{
        type:Number,
    },
    inversionCompleta:{
        type: Boolean,
        default: false,
    },
    roi_date:{
        type: Date,
    },
    age:{
        type: Number,
    },
    comments:{
        type: String,
    },
    foto:{
        type:String
    }
});

const Startup = mongoose.model('Startup', schemaStartup);

module.exports = Startup;