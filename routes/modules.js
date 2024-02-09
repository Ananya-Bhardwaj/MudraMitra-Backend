import express from 'express'; 
import {fetchModules, fetchModulebyId , createModule,editModule,deleteModule} from '../controllers/modules.js'; 


const router = express.Router(); 

router.get('/', fetchModules);
router.get('/:id', fetchModulebyId);
router.post('/', createModule);
router.put('/:id', editModule);
router.delete('/:id', deleteModule);

export default router; 