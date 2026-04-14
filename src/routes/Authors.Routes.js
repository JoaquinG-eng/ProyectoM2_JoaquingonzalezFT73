import express from 'express'; // importa Express para crear rutas de autores
import { getAuthors, 
getAuthorById, 
createAuthor, 
updateAuthor, 
deleteAuthor } from '../controllers/Authors.Controller.js'; // importa las funciones del controlador de autores

const router = express.Router();


router.get('/', getAuthors); // ruta para obtener todos los autores, llama a la función getAuthors del controlador de autores


router.get('/:id', getAuthorById); // ruta para obtener un autor por ID, llama a la función getAuthorById del controlador de autores


router.post('/', createAuthor); // ruta para crear un nuevo autor, llama a la función createAuthor del controlador de autores


router.put('/:id', updateAuthor); // ruta para actualizar un autor existente por ID


router.delete('/:id', deleteAuthor);

export default router;  
