import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 8000;
const MONGOURL = process.env.MONGO_URL;

if (!MONGOURL) {
    console.log("MONGO_URL is not defined in .env file");
    process.exit(1); // Exit if MONGO_URL is missing
}

mongoose.connect(MONGOURL)
    .then(() => {
        console.log("Database is connected - MongoDB");
        app.listen(PORT, () => {
            console.log(`Running on PORT ${PORT}`);
        });
    })
    .catch((error) => {
        console.error("Database connection error:", error);
    });
