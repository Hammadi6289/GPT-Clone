import mongoose from "mongoose";

const connectDB = async () => {
  if (!process.env.MONGO_URI) {
    console.error("MONGO_URI environment variable is not set");
    return;
  }

  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log(
      `Successfully connected to the Database ${mongoose.connection.host}`
    );
  } catch (error) {
    console.log(`MongoDB Error ${error}`);
  }
};

export default connectDB;
