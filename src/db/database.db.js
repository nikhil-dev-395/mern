import mongoose from "mongoose";

const connectToDatabase = async () => {
  try {
    await mongoose
      .connect("mongodb://127.0.0.1:27017/practice_8dec")
      .then(() => {
        console.log("database connected");
      })
      .catch((error) => {
        console.log(" error at connecting to db ", error);
      });
  } catch (error) {
    console.log("error occurred at connection to db ", error);
  }
};

export default connectToDatabase;
