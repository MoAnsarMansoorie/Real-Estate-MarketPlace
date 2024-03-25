import dotenv from "dotenv";
import express from "express";
import mongoose from "mongoose";
import cors from "cors";

dotenv.config();

mongoose
  .connect(process.env.MONGODB_URL)
  .then(() => {
    console.log(`Connected database successfully`);
  })
  .catch((err) => {
    console.log(err);
  });

const app = express();

app.use(express.json());
app.use(cors());

app.get((req, res) => {
  res.status(200).send("Hello");
});

app.listen(8080, () => {
  console.log(`Server is started at http://localhost:8080`);
});
