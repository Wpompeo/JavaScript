import mongoose, { mongo } from "mongoose";

async function conectaDataBase(){
    //connection string mongo
    mongoose.connect(process.env.DB_CONNECTION_STRING);   
    return mongoose.connection;
};

export default conectaDataBase;


