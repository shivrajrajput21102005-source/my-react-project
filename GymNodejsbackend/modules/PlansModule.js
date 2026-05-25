import mongoose, { Schema } from "mongoose";

const Planschema = new Schema({
  price: { type: String, required: true },
  start_date: { type: Date, required: true },
  end_date: { type: Date, required: true },
  member: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Member",
    required: true,
  },
  plan: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "AllPlans",
    required: true,
  },
});
const MemberPlan = mongoose.model("Plan", Planschema);
export default MemberPlan;
