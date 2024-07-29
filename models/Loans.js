const { Decimal128 } = require('bson');
const mongoose = require('mongoose');



const loanSchema = new mongoose.Schema({

    name: {
        type: String,
        required: true
    },
    lender:{
        type: String,
        required: true
    } ,
    amount:{
        type: Number,
        minimum: 0,
        required: true
    }, 

    interestRate:
    {
        type: Number,
        minimum: 0,
        maximum: 100,
        required: true
    },
    
    timePeriod :
    {
        type: Number,
        minimum: 0,
        required: true
    },

    totalInterest:
    {
        type: Number,
        
    } ,
    frequency:{
       type: String,
       enum:['monthly', 'quarterly', 'semi-annually', 'annually']

    }
    });
const Loans = mongoose.model('Loans', loanSchema);
module.exports = Loans;