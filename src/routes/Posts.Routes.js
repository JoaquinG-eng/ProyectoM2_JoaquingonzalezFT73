import { Router } from "express";
import {
    getPosts,
    getPostById,
    getPostsByAuthor,
    createPost,
    updatePost,
    deletePost
} from "../controllers/Post.Controllers.js";

const router = Router();

// GET todos
router.get('/', getPosts);

// GET por ID
router.get('/:id', getPostById);

// GET por autor
router.get('/author/:authorId', getPostsByAuthor);

// POST
router.post('/', createPost);

// PUT
router.put('/:id', updatePost);

// DELETE
router.delete('/:id', deletePost);

export default router;