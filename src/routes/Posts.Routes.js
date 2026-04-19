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

router.get("/", getPosts);
router.get("/:id", getPostById);
router.get("/author/:authorId", getPostsByAuthor);

router.post("/", createPost);
router.put("/:id", updatePost);
router.delete("/:id", deletePost);

export default router;