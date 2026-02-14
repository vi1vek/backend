import mongoose from "mongoose";

const connectDb = async ()=>{
    try{
        await mongoose.connect(process.env.MONGO_URL)
        console.log('Mongo db Connection successfully');
        
    }catch(error){
        console.error('Mongo db Connection Failed',error.message);
        // process.exit(1)
    }
}

export default connectDb;