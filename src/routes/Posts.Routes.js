import { Router } from "express"; // importa el Router de Express para crear rutas de posts
import { getPosts,
    getPostById,
    createPost,
    updatePost,
    deletePost } from "../controllers/Posts.Controller.js";// importa las funciones del controlador de posts

const router = Router(); // crea un nuevo router para manejar las rutas de posts

router.get('/', async (req, res) => { // ruta para obtener todos los posts
    try {
        const posts = await getPosts(); // llama a la función para obtener los posts
        res.json(posts); // retorna los posts en formato JSON
    } catch (error) {
        res.status(500).json({ message: 'Error retrieving posts' }); // maneja errores y retorna un mensaje de error
    }
});

router.get('/:id', async (req, res) => { // ruta para obtener un post por ID
    try {
        const post = await getPostById(req.params.id); // llama a la función para obtener un post por ID
        if (!post) {
            return res.status(404).json({ message: 'Post not found' }); // retorna 404 si el post no existe
        }  
        res.json(post); // retorna el post encontrado en formato JSON
    } catch (error) {
        res.status(500).json({ message: 'Error retrieving post' }); // maneja errores y retorna un mensaje de error
    }
});

router.post('/', async (req, res) => { // ruta para crear un nuevo post
    try {
        const newPost = await createPost(req.body); // llama a la función para crear un nuevo post con los datos del cuerpo de la solicitud
        res.status(201).json(newPost); // retorna el nuevo post creado con status 201 (Created)
    } catch (error) {
        res.status(500).json({ message: 'Error creating post' }); // maneja errores y retorna un mensaje de error
    }
});

router.put('/:id', async (req, res) => { // ruta para actualizar un post existente por ID
    try {
        const updatedPost = await updatePost(req.params.id, req.body); // llama a la función para actualizar un post por ID con los datos del cuerpo de la solicitud
        if (!updatedPost) {
            return res.status(404).json({ message: 'Post not found' }); // retorna 404 si el post no existe
        }  
        res.json(updatedPost); // retorna el post actualizado en formato JSON
    } catch (error) {
        res.status(500).json({ message: 'Error updating post' }); // maneja errores y retorna un mensaje de error
    }
});

router.delete('/:id', async (req, res) => { // ruta para eliminar un post por ID   
    try {
        const deleted = await deletePost(req.params.id); // llama a la función para eliminar un post por ID
        if (!deleted) {
            return res.status(404).json({ message: 'Post not found' }); // retorna 404 si el post no existe
        }
        res.json({ message: 'Post deleted successfully' }); // retorna un mensaje de éxito si el post fue eliminado
    } catch (error) {
        res.status(500).json({ message: 'Error deleting post' }); // maneja errores y retorna un mensaje de error

    }
});

export default router; // exporta el router para ser utilizado en otras partes de la aplicación