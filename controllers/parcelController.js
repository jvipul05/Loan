const mongoose = require('mongoose');
const parcel =require("../models/parcel");
const streetblock = require("../models/Streetblock");
exports.createParcel = async (req, res) => {   
    try{
        const {owner,address,tax} = req.body;
       const block = await streetblock.findById(req.params.id);  
        const newParcel = new parcel({
            owner,
            address,
            tax,
            streetblock:block
        });
        await newParcel.save();
        res.status(201).json({
            success: 'true',
            data: newParcel,
            message: 'Parcel created successfully'
        });
    }catch(err){
        res.status(500).json({
            success: 'false',
            message: err.message
        });

    }
}