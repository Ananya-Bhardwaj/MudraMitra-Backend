import express from 'express'; 
 //const authcontroller= require(''); 
import {login} from '../controllers/user.js'

const router = express.Router(); 

router.route("login").post(login);

/*router.get('/', fetchUser);
router.get('/:id', fetchUserbyId );
router.post('/', addUser);
router.put('/:id', editUser);
router.delete('/:id', deleteUser);
*/

export default router; 
