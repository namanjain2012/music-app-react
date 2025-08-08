import { register as registerUser } from "../services/user-service.js";
export const login = (req,res)=>{
    res.json({message : 'Login'});
};
export const register = async (req,res)=>{
    console.log("Data Received",req.body);
    const userObject = req.body;
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