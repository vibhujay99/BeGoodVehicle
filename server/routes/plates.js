import express from 'express';

import { getPlates,  updatePlates, deletePlates, createPlate } from '../controllers/plates.js';
const router = express.Router();


//http://localhost:5000/plates

router.get('/', getPlates);
router.post('/', createPlate);
router.patch('/:id', updatePlates);
router.delete('/:id', deletePlates);



export default router;