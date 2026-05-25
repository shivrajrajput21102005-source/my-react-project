import mongoose, { Schema } from "mongoose";
const realuserSchema = new Schema({
  name: String,
  email: { type: String, unique: true, required: true },
  password: String,
  googleId: String,
  picture: String,
});
const GoogleUser = mongoose.model("GoogleUser", realuserSchema);
export default GoogleUser;
