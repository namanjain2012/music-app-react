import express from 'express';
const app = express();
console.log("Express type : ",typeof express);
console.log("App type : ",typeof app);
app.listen(7777,(err)=>{
    if(err){
        console.log('Server crash ',err);
    }
    else{
        console.log('Server Up and Running');
    }
})