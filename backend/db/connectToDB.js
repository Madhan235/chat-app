import mongoose from "mongoose";

 const connectToDB = async ()=>{
    try {
        await mongoose.connect(process.env.MONGO);
        console.log("Connected to DB");
    } catch (error) {
        console.log(error.message);
    } 
}

export default connectToDB;
