const mongoose = require('mongoose');

const contactSchema = mongoose.Schema({
    full_name:{
        type: String,
        required: [true, 'Please insert your full name']
    },
    email:{
        type: String,
        required:[true, 'Please insert your email']
    },
    subject:{
        type: String,
        required:[true, 'Please insert a subject']
    },
    message:{
        type: String,
        required:[true, 'Please insert a message']
    }
});

module.exports = mongoose.model('Contact',contactSchema);