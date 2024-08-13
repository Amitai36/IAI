import { mongoDBConnection } from "../config";
import mongoose from "mongoose";
const uri = mongoDBConnection;

export async function connectDB() {
  try {
    mongoose
      .connect(uri, { autoIndex: true })
      .then(() => console.log("Connected to MongoDB"))
      .catch((error) => console.error("Connection error", error));
  } finally {
    console.log("db server err")
  }
}
connectDB().catch(console.dir);
