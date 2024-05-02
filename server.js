import express from "express";
import morgan from "morgan";
import cors from "cors";
import bodyParser from "body-parser";
import dotenv from "dotenv";
import connectDB from "./config/db.js";

dotenv.config();

//MongoDB Connection
connectDB();

//rest object
const app = express();

//middlewares
app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(morgan("dev"));

const PORT = process.env.PORT || 8080;

app.listen(PORT, () => {
  console.log(`Server is Running in ${process.env.DEV_MODE} om Port ${PORT}`);
});
