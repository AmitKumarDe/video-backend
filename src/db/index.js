import mongoose from "mongoose";
import dns from "node:dns/promises";
import { DB_NAME } from "../constants.js";

dns.setServers(["8.8.8.8", "1.1.1.1"]);

// console.log(`${process.env.MONGODB_URI}/${DB_NAME}`);
const connectDB = async () => {
  try {
    const connectionInstance = await mongoose.connect(
      `${process.env.MONGODB_URI}/${DB_NAME}`
    );
    console.log(
      `\n MongoDB connected !! DB Host: ${connectionInstance.connection.host}`
    );
  } catch (error) {
    console.log("MongoDB Connection error occurred from: ", error);
  }
};

export default connectDB;
