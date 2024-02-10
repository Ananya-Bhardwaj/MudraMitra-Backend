import express from 'express'; 
 const authcontroller= require('../controllers/user.js'); 


const router = express.Router(); 

router.route("user").post(authcontroller.user);

/*router.get('/', fetchUser);
router.get('/:id', fetchUserbyId );
router.post('/', addUser);
router.put('/:id', editUser);
router.delete('/:id', deleteUser);
*/

export default router; 
