import express from 'express';
import { getAuthors, 
getAuthorById, 
createAuthor, 
updateAuthor, 
deleteAuthor } from '../controllers/Authors.Controller.js'; 

const router = express.Router();


router.get('/', getAuthors); 


router.get('/:id', getAuthorById); 


router.post('/', createAuthor); 


router.put('/:id', updateAuthor); 


router.delete('/:id', deleteAuthor);

export default router;  
