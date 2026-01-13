const mongoose = require('mongoose');

const transactionSchema = new mongoose.Schema({
    desc:{
        type: String,
        required: true
    },
    amount:{
   type: Number,
   required: true
    },
    type:{
        type: String,
        enum: ['income', 'expense'],
        required: true
    }
}, {timestamps: true});

module.exports = mongoose.model('Transaction', transactionSchema);
