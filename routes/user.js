import express from 'express'; 
import {fetchUser, fetchUserbyId , addUser,editUser,deleteUser} from '../controllers/user.js'; 


const router = express.Router(); 

router.get('/', fetchUser);
router.get('/:id', fetchUserbyId );
router.post('/', addUser);
router.put('/:id', editUser);
router.delete('/:id', deleteUser);


export default router; 
