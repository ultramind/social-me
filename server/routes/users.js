import express from "express";
import { verifyUser } from "../middleware/auth.js";
import {
  addRemoveFriend,
  getUser,
  getUserFriends,
} from "../controllers/users.js";

const router = express.Router();

// READ REQUESTS
router.get("/:id", verifyUser, getUser);
router.get("/:id/friends", verifyUser, getUserFriends);

// UPDATE
router.patch("/:id/:friendId", verifyUser, addRemoveFriend);
export default router;
