import express from "express";
import { verifyUser } from "../middleware/auth.js";
import { getFeedPosts, getUserPosts, likePost } from "../controllers/posts.js";

const router = express.Router();

// READ
router.get("/", verifyUser, getFeedPosts);
router.get("/:userId/posts", verifyUser, getUserPosts);

// UPDATE
router.patch("/:id/like", verifyUser, likePost);

export default router;
