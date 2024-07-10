require('dotenv').config();

const express = require('express');
const app = express();

const connectDB = require('./configs/connect-db')

const run = async () => {
    // TODO: configure PORT in .env - default port 3000
    const port = process.env.PORT || 3000;

    try {
        await connectDB(process.env.MONGO_URI);

        app.listen(port, ()=>{
            console.log(`Server listening on ${port}`);
        })
    } catch (error) {
        console.log(error);    
    }
};

run();



