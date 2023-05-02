import mongoose from "mongoose";

const connection = async () => {
    try {
        await mongoose.connect(process.env.DB);
        console.log("connected to database.");
    } catch (error) {
        console.log(error, "could not connect database.");
    }
};

export default connection;