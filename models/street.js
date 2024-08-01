const mongoose = require('mongoose');
const streetSchema = new mongoose.Schema({
    Id: {
        type: Number,
        required: true
    },
});
const Street = mongoose.model('Street', streetSchema);