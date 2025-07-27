import express from 'express';
const router = express.Router();
router.get('/all-songs',(req,res)=>{
    res.send("All songs");
});
router.get('/search-songs',(req,res)=>{
    res.send("Searching Song...");
    
});
router.post('/add-song',(req,res)=>{
    res.send("Song added");
});
router.post('/update-song',(req,res)=>{
    res.send("Song updated");
});

export default router;