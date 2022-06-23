import mongoose from "mongoose";
import * as dotenv from "dotenv";

export const connectDB = () => {
    dotenv.config();
    return mongoose
        .connect(`${process.env.CONNECTION_STRING}`)
        .then(() => console.log(`database connected successfully`))
        .catch((err) => console.log(err.message));
};

export * as objsDataAccess from './objs.database';