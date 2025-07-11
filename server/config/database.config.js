import mongoose from "mongoose";

const ConnectToDatabase = async () => {
  try{
    await mongoose.connect(process.env.DB_URI, { dbName: process.env.DB_NAME })
    .then(() => { console.log(`Database connected`) })
    .catch((e) => { console.log(`Error connecting database - ${e}`) });
  }
  catch(e) {
    console.log(`Error while connecting database - ${e}`);
  }
}

export default ConnectToDatabase;