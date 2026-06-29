import { asyncHandler } from "../utils/asyncHandler.js";
import { ApiError } from "../utils/ApiError.js";
import {User} from "../models/user.model.js"

const registerUser = asyncHandler(async (req, res) => {
  //get user details from frontend
  //validation -not empty
  //check if user already exists:username, email
  //check for images,check for avatar
  //upload them to  cloudinary,avatar
  //create user in db
  //remove password and refresh token field from response
  //check user creation success or failure and send response accordingly

  const { fullName, username, email, password } = req.body;
  console.log(fullName, username, email, password);

  if ([fullName, username, email, password].some(field?.trim() === "")) {
    throw new ApiError(400, "All fields are required");
  }
  
});

export { registerUser };
