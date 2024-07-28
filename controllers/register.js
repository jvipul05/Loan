const bcrypt = require('bcrypt');
const User = require('../models/Users');



exports.register = async (req, res) => {
 
try{
    const { name, email, phone, password } = req.body;

    const existingUser =await User.findOne({email});
    if(existingUser)
        {
        return res.status(400).json(
            {  
                 sucsess: 'false',
                message: 'User already exists'
            }
        );
    }
    const encryptedPassword = await bcrypt.hash(password, 10);
    const user = new User({
        name,
        email,
        phone,
        password: encryptedPassword
    });
    await user.save();
    return res.status(201).json({
        success: 'true',
        message: 'User registered successfully'
    });

}catch(err){
    return res.status(500).json({
        success: 'false',
        message: 'Internal server error'
    });
}
};