import { register as registerUser,login as loginUser } from "../services/user-service.js";
export const login = async (req,res)=>{
    const userObject = req.body;
    try{
        const obj = await loginUser(userObject);
        console.log(message);
        res.status(200).json(obj);
    }
    catch(err){
        res.status(500).json({message:"Login failed...server crash"});
        console.log(err);
    }
};
export const register = async (req,res)=>{
    const userObject = req.body;
    console.log("Data Received ",userObject);
    try{
        const message = await registerUser(userObject);
        res.status(200).json({message:message});
    }
    catch(err){
        res.status(500).json({message:'Error during register'});
        console.log(err);
    }
};
export const profile = (req,res)=>{
    res.json({message : 'Profile'});
};