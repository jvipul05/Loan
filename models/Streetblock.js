const mongoose = require('mongoose');

const streetblockSchema = new mongoose.Schema({

    Id: {
        type: Number,
        required: true
    },
    transactionDate:{
        type: Date,
        required: true
    } ,
    street:{
        type: mongoose.Schema.Types.ObjectId,
        ref:'Street'
    }

});
const Streetblock = mongoose.model('Streetblock', streetblockSchema);
module.exports = Streetblock;
