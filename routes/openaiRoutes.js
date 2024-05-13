import express from "express";
import {
  summaryController,
  jsconverterController,
} from "../controllers/openaiController.js";

const router = express.Router(); //router object

//routes
router.post("/summary", summaryController);
//router.post("/chatbot", chatbotController);
router.post("/js-converter", jsconverterController);
//router.post("/scifi-image", scifiImageController);

export default router;
