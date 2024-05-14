import dotenv from "dotenv";
import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import userRouter from "./routes/user.route.js"
import authRouter from "./routes/auth.route.js"

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

app.use("/api/v1/user", userRouter)
app.use("/api/v1/auth", authRouter)

app.get("/", (req, res) => {
  res.status(200).send("Hello");
});

app.listen(8080, () => {
  console.log(`Server is started at http://localhost:8080`);
});
