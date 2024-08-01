const mongoose = require('mongoose');

const parcelSchema = new mongoose.Schema({
    owner: {
        type: String,
        required:true
    },
    address:{
        type: String,
        required:true
    },  
    tax:{
        type: Number,
        required:true
    },
    streetblock:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Streetblock'
    }

    

});
 
const Parcel = mongoose.model('Parcel', parcelSchema);
module.exports = Parcel;