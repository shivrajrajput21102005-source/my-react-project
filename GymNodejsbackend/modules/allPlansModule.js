import mongoose, { Schema } from "mongoose";

const allPlansSchema = new Schema({
  name: { type: String },
  //   Validity_days: { type: String },
  plan_type: { type: String },
  duration: {
    type: String,
  },

  offer: { type: String },
  badge: { type: String },
  features: { type: Array },
  price: { type: Number },
  is_active: { type: Boolean },
});

const AllPlans = mongoose.model("allPlans", allPlansSchema);
export default AllPlans;
