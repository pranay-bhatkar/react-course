import mongoose from "mongoose";

export async function connectDB() {
  try {
    await mongoose.connect(process.env.DB_URL);
    console.log("DB connected");
  } catch (error) {
    console.log("error : : ", error);
  }
}
