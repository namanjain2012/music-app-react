import mongoose, { Schema, SchemaType } from "mongoose";
const userSchema = new Schema({
    'email' : {type:SchemaType.String,required:true,unique:true},
    'password' : {type:SchemaType.String,minLength:8,maxLength:25,required:true},
    'name' : {type:SchemaType.String,minLength:3},
    'status':{type:SchemaType.String,default:'A'},
    'regdate':{type:SchemaType.Date,default:Date.now}
});
const userModel = mongoose.model("users",userSchema);