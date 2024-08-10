const express = require('express');
const app = express();
app.use(express.json());

const swaggerUi = require('swagger-ui-express');
const swaggerJsdoc = require('swagger-jsdoc');

const userRoutes = require('./routes/userRoutes');
const loanRoutes = require('./routes/loanRoutes');
const parcelRoutes = require('./routes/parcel');
const dbConnect = require('./config/database');
const cookieParser = require('cookie-parser');

app.use(cookieParser());

require("dotenv").config();

app.listen(process.env.PORT || 4000, () => {
    console.log(`Server is running on port ${process.env.PORT}`);
 
});


dbConnect();


const swaggerOptions = {
    swaggerDefinition: {
        openapi: '3.0.0',
        info: {
            title: 'API Documentation',
            version: '1.0.0',
            description: 'API Information  : -----please login through user routes to access the api of loans',
           
            contact: {
                name: 'Vipul Jain',
            },
            servers: [{ url: 'http://localhost:3000' }],
        },
    },
    apis: ['./routes/*.js'], // Path to the API docs
};
const swaggerDocs = swaggerJsdoc(swaggerOptions);

app.use('/api/v1/docs', swaggerUi.serve, swaggerUi.setup(swaggerDocs));
app.use('/api/v1/users', userRoutes);
app.use('/api/v1/loans' ,loanRoutes);
app.use('/api/v1/parcels', parcelRoutes);