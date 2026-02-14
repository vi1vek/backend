import express from 'express';
import dotenv from 'dotenv';
import connectDb from './config/db.js';
import userRoute from './routes/userRoute.js';
import cors from 'cors';
dotenv.config()

const app = express();
// !Middleware
app.use(cors())
app.use(express.json())
app.use("/api/users",userRoute)


const PORT = process.env.PORT || 4000
app.listen(PORT,()=>{
    connectDb()
    console.log(`Server is running at port ${PORT}`);
    
})