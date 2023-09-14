import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import mongoose from "mongoose";
import cookieParser from "cookie-parser";

import authRoute from "./routes/auth.js";

//const { createWorker } = require('tesseract.js')
const app = express();

const port = 3001;
dotenv.config();
mongoose.set("strictQuery", false);

const connect = async () => {
  try {
    await mongoose.connect(process.env.MONGO);
    console.log("connected to mongodb");
  } catch (error) {
    throw error;
  }
};

app.use(cors());
app.use(cookieParser());
app.use(express.json()); // To support json request data

app.use("/auth", authRoute);

app.get("/", async (req, res) => {
  // const amountPattern = /rs\.?\s?[0-9]+\.[0-9]*/gim;
  /*const worker = await createWorker({
    logger: m => console.log(m)
  });
  const obj ={};

  (async () => {
    await worker.loadLanguage('eng');
    await worker.initialize('eng');
    const { data: { text } } = await worker.recognize('./receipt.png');
    const textArray = text.split(/\n/);
    textArray.forEach((textLine) => {
      te
    });
    console.log(text.split(/\n/));
    res.send(text);
    await worker.terminate();
  })(); */
  res.send("Hello World, Date serve from Node.js server");
});
app.get("/about", (req, res) => {
  res.send("Hey Balasubramani K!");
});

/* mongoose.connection.on("connected", () => {
  console.log("MongoDB connected back!");
});

mongoose.connection.on("disconnected", () => {
  console.log("MongoDB disconnected!");
}); */

app.listen(port, () => {
  connect();
  console.log(`Example app listening on port ${port}`);
});
