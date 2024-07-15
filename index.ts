import dotenv from "dotenv";
dotenv.config();

import express from "express";
import connectDB from "./configs/connect-db.config";
import AppRouter from "./routes/main.router";
import { notFoundHandler, serverErrorHandler } from "./middlewares";
import URLs from "./configs/api-urls.config";

const app = express();

// Set Router
app.use(URLs.ROOT, AppRouter);

// Set Middleware
app.use(notFoundHandler);
app.use(serverErrorHandler);

const run = async () => {
    // TODO: configure PORT in .env - default port 3000
    const port = process.env.PORT || 3000;

    try {
        await connectDB(process.env.MONGO_URI as string);

        app.listen(port, () => {
            console.log(`Server listening on ${port}`);
        });
    } catch (error) {
        console.log(error);
    }
};

run();
