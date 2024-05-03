const mongoose = require('mongoose');

const clientSchema = mongoose.Schema({
    name:{
        type: String,
        required: [true, 'Please insert your name']
    },
    last_name:{
        type: String,
        required:[true, 'Please insert your last name']
    },
    email:{
        type: String,
        required:[true, 'Please insert your email']
    },
    phone:{
        type: String,
        required:[true, 'Please insert your phone number']
    },
    address:{
        type: String,
        required:[true, 'Please insert your address']
    }
});

module.exports = mongoose.model('Client',clientSchema);