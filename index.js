const express = require('express');
const app = express();
app.use(express.json());

const userRoutes = require('./routes/userRoutes');
const loanRoutes = require('./routes/loanRoutes');
const dbConnect = require('./config/database');
const cookieParser = require('cookie-parser');
app.use(cookieParser());
require("dotenv").config();
app.listen(process.env.PORT, () => {
    console.log(`Server is running on port ${process.env.PORT}`);
 
});

dbConnect();

app.use('/api/v1/users', userRoutes);
app.use('/api/v1/loans' ,loanRoutes);