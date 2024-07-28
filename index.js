const express = require('express');
const app = express();
app.use(express.json());
const dbConnect = require('./config/database');
const userRoutes = require('./routes/userRoutes');

require("dotenv").config();
app.listen(process.env.PORT, () => {
    console.log(`Server is running on port ${process.env.PORT}`);
 
});
dbConnect();
app.use('/api/v1/users', userRoutes);
