// Import dotenv
import "dotenv/config";
import connectDB from "./db/index.js";
import { app } from "./app.js";

console.log("Access Token Secret:", process.env.ACCESS_TOKEN_SECRET);
console.log("Refresh Token Secret", process.env.REFRESH_TOKEN_SECRET);

connectDB()
  .then(() => {
    app.listen(process.env.PORT || 8000, () => {
      console.log(`Server is running at port :${process.env.PORT}`);
    });
  })
  .catch(() => {
    console.log("MONGO db connection failed !! ", error);
  });
