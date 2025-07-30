import express from 'express';
import { addSong, getAllSongs, searchSong, updateSong } from '../../../controllers/music-controller.js';

const router = express.Router();
router.get('/all-songs',getAllSongs);
router.get('/search-songs',searchSong);
router.post('/add-song',addSong);
router.post('/update-song',updateSong);

export default router;