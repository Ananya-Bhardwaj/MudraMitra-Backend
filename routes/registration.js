import express from 'express'; 
 const authcontroller= require('../controllers/registration.js'); 


const router = express.Router(); 

router.route("registration").post(authcontroller.register);

/*router.get('/', fetchUser);
router.get('/:id', fetchUserbyId );
router.post('/', addUser);
router.put('/:id', editUser);
router.delete('/:id', deleteUser);
*/

export default router; 
