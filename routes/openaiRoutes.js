import express from "express";
import { summaryController } from "../controllers/openaiController.js";

const router = express.Router(); //router object

//routes
router.post("/summary", summaryController);

export default router;
