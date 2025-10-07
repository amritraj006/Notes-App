import express from "express";
import { getAllNotes, createNote, likeNote } from "../controllers/noteController.js";

const router = express.Router();

router.get("/", getAllNotes);
router.post("/", createNote);
router.put("/like/:id", likeNote);

export default router;
