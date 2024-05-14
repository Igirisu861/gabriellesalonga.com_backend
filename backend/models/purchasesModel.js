const mongoose = require('mongoose');

const purchaseModel = mongoose.Schema({
    client:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Client'
    },
    articles:[{
        type: String,
        required:[true, 'Please insert at least one article']
    }]
},
{
    timestamps: true
});

module.exports = mongoose.model('Purchase',purchaseModel);