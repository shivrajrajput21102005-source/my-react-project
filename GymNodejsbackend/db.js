import mongoose from "mongoose";

const ConnectDB = async () => {
  try {
    mongoose.connect(process.env.MONGO_URI);
  } catch (err) {
    process.exit(1);
  }
};
export default ConnectDB;
