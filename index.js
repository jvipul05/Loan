const express = require('express');
const app = express();
app.use(express.json());
const dbConnect = require('./config/database');

require("dotenv").config();
app.listen(process.env.PORT, () => {
    console.log(`Server is running on port ${process.env.PORT}`);
 
});
dbConnect();
