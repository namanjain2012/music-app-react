import express from 'express';
import chalk from 'chalk';
import userRoutes from './api/v1/routes/user-routes.js';
import musicRoutes from './api/v1/routes/music-routes.js';

const app = express();
console.log("Express type : ",typeof express);
console.log("App type : ",typeof app);

app.use('/api/v1/user',userRoutes);
app.use('/api/v1/music',musicRoutes);
app.use((req,res,next)=>{
    res.send("OOps something went wrong..");
});

// app.get('/',(req,res)=>{
//     res.send('<h1>Hello User</h1>');
// });
// app.get('/login',(req,res)=>{
//     res.send('<h1>Login...</h1>');
// });
const server = app.listen(7777,(err)=>{
    if(err){
        console.log(chalk.redBright.bold('Server crash '),err);
    }
    else{
        console.log(chalk.greenBright.bold('Server Up and Running '),server.address().port);
    }
})