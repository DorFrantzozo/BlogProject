import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import userRoutes from "./routes/users.routes.js";
import cors from "cors";

dotenv.config();
const app = express();
app.use(express.json());
app.use(cors());

mongoose
  .connect(process.env.MONGO_URL)
  .then(console.log("connected to mongoDB"))
  .catch((err) => console.log(err));

app.use("/api/users", userRoutes);

app.listen(3000, () => {
  console.log("Server started on port 3000");
});
