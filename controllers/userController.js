import User from "../models/userModel.js"

export const Register=async(req,res)=>{
    try{
        const {name,email,password} = req.body
        if(!name || !email || !password){
            return res.status(403).json({
                sucess:false,
                message: "All Field Are Required!"
            })
        }
        const existingUser = await User.findOne({email});

        if(existingUser){
            return res.status(400).json({
                sucess:false,
                message: "User Already Exist"
            })
        }

        const newUser = new User({name,email,password})
        await newUser.save();

    }catch(error){
        return res.status(400).json({
            sucess:false,
            message:error.message
        })
    }


}

export const GetAllUser=async(req,res)=>{
    try{
        const user = await User.find({});
        if(!user){
           return res.status(400).json({
            sucess:false,
            message:"No Record Found"
            }) 
        }
        console.log(user);
        res.json(user)
        
        

    }catch(error){
        return res.status(400).json({
            sucess:false,
            message:error.message
        })
    }


}