import mongoose, { Schema } from "mongoose";

const messageschema = new Schema({
  message: String,
  sender: String,
  time: {
    type: Date,
    default: Date.now,
  },
});
const MessageModule = mongoose.model("MessageModule", messageschema);
export default MessageModule;
