import express from "express";
import { getCommentsByNote, createComment, deleteComment } from "../controllers/commentController.js";

const router = express.Router();

router.get("/:noteId", getCommentsByNote);
router.post("/", createComment);
router.delete("/:id", deleteComment);

export default router;
