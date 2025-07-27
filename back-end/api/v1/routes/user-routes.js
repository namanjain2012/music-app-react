import express from 'express';
const router = express.Router();
router.get('/profile',(req,res)=>{
    res.send('Profile');
});
router.post('/login',(req,res)=>{
    res.send('Login');
});
router.post('/register',(req,res)=>{
    res.send('Register');
});

export default router;