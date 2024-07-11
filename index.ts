import dotenv from 'dotenv';
dotenv.config();

import express from 'express';
import connectDB from './configs/connect-db';
import AppRouter from './routes/main';
import URLS from './configs/api-urls';

const app = express();

// Set Router 
app.use(URLS.ROOT, AppRouter);

const run = async () => {
    // TODO: configure PORT in .env - default port 3000
    const port = process.env.PORT || 3000;

    try {
        await connectDB(process.env.MONGO_URI as string);

        app.listen(port, ()=>{
            console.log(`Server listening on ${port}`);
        })
    } catch (error) {
        console.log(error);    
    }
};

run();



