import { UserModel } from "../models/user-model.js"

export const register = async (userObject)=>{
    try{
        const doc = await UserModel.create(userObject.data);
        if(doc && doc._id){
            return "User registered Succesfully!!";
        }
    }
    catch(err){
        throw err;
    }
}