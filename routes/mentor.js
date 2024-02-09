import express from 'express'; 
import {fetchMentor, fetchMentorbyId , addMentor,editMentor,deleteMentor} from '../controllers/mentor.js'; 


const router = express.Router(); 

router.get('/', fetchMentor);
router.get('/:id', fetchMentorbyId );
router.post('/', addMentor);
router.put('/:id', editMentor);
router.delete('/:id', deleteMentor);


export default router; 