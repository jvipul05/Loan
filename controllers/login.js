const User = require('../models/Users');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
require('dotenv').config();

exports.login = async (req, res) => {
    try{
        const {email, password} = req.body;
        if(!email || !password){
            return res.status(400).json(
            {
                success: 'false',
                message: 'Please provide email and password'
            }
        );
        }
        var user = await User.findOne({email});
        if(!user){
            return res.status(404).json({
                success: 'false',
                message: 'User not found'
            });
        }
        const isMatch = await bcrypt.compare(password, user.password);
        if(!isMatch){
            return res.status(400).json({
                success: 'false',
                message: 'Invalid credentials'
            });
        }
        const payload={
            email: user.email,
            id: user._id
        }
        const token=jwt.sign(payload, process.env.JWT_SECRET, {expiresIn: '1h'});
        user= user.toObject();
        user.token=token;
        user.password=undefined;
        const options = {
            expires: new Date(Date.now() + 1000*60*60*24*30),
            httpOnly: true
        };
        res.cookie('token', token, options).status(200).json({
            success: true,
            data: user,
            message: 'User logged in successfully'  });
    }
    catch(error){
        res.status(500).json(
            {   
                success: 'false',
                message: error.message
            }
        );
    }
}