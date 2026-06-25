import mongoose from "mongoose";

export async function connectDB() {
  try {
    console.log("db is connecting");

    await mongoose.connect();
    console.log("DB connected");
  } catch (error) {
    console.log("Error : ", error);
  }
}
