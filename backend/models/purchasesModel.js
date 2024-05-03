const mongoose = require('mongoose');

const purchaseModel = mongoose.Schema({
    client:{
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'Client'
    },
    articles:[{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Print'
    }]
},
{
    timestamps: true
});

module.exports = mongoose.model('Purchase',purchaseModel);