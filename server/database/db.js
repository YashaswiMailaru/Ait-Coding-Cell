import mongoose from "mongoose";
import Dotenv from "dotenv";
Dotenv.config();

const Connection = async () => {
    try {
        const url = process.env.DB_URL;
        await mongoose
            .connect(url, {
                useNewUrlParser: true,
                useUnifiedTopology: true,
                useCreateIndex: true,
            })
            .then(() => console.log("Database connected!"))
            .catch(err => console.log(err));

    } catch (error) {
        console.log("error while connecting ", error);
    }
}

export default Connection;