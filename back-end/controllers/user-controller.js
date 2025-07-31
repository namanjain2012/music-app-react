export const login = (req,res)=>{
    res.json({message : 'Login'});
};
export const register = (req,res)=>{
    console.log("Data Received",req.body);
    res.json({message : 'Register'});
};
export const profile = (req,res)=>{
    res.json({message : 'Profile'});
};