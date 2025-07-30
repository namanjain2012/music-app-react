export const Error404 = (req,res,next)=>{
    res.json({message : "OOps something went wrong.."});
};