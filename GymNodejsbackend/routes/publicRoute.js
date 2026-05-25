import AllPlans from "../modules/allPlansModule.js";
import express from "express";
const publicRoute = express.Router();

publicRoute.get("/allPlans", async (req, res) => {
    const query = req.query.q
  const allPlans = await AllPlans.find({ is_active: true,plan_type:`${query}` });
  res.json({ allPlans });
});
export default publicRoute;
