import mongoose from "mongoose";

export async function DBConnect() {
  try {
    console.log("DB connecting...");
    const connection = await mongoose.connect(process.env.DB_URL);
    console.log("DB connected...");
  } catch (error) {
    console.log("error : ", error);
  }
}
