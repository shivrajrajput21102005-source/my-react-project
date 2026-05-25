import mongoose, { Schema } from "mongoose";

const memberSchema = new Schema({
  name: {
    type: String,
    required: true,
    unique: true,
  },
  phoneNumber: { type: String, required: true, unique: true },
});
const Member = mongoose.model("Member", memberSchema);
export default Member;
