import express from 'express';
import chalk from 'chalk';
import userRoutes from './api/v1/routes/user-routes.js';
import musicRoutes from './api/v1/routes/music-routes.js';
import { indexRoute } from './api/v1/routes/index.js';
import { Error404 } from './utils/middlewares/404.js';

const app = express();
console.log("Express type : ",typeof express);
console.log("App type : ",typeof app);

app.use('/api/v1',indexRoute);

app.use(Error404);
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