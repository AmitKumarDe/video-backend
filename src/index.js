// Import dotenv
import "dotenv/config";
import connectDB from "./db/index.js";

console.log("URI:", process.env.MONGODB_URI);

connectDB();
