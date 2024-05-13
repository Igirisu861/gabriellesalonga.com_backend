const mongoose = require('mongoose');

const printSchema = mongoose.Schema({
    title:{
        type: String,
        required: [true, 'Please insert the title']
    },
    price:{
        type: String,
        required:[true, 'Please insert the price']
    },
    sizes:[{
        type: String,
        required:[true, 'Please insert the size']
    }]
});

module.exports = mongoose.model('Print',printSchema);