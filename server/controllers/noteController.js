import Note from "../models/Note.js";

// GET all notes
export const getAllNotes = async (req, res) => {
  try {
    const notes = await Note.find().sort({ createdAt: -1 });
    res.json({ success: true, notes });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
};

// CREATE a new note
export const createNote = async (req, res) => {
  try {
    const { title, content, authorId, authorName } = req.body;
    const snippet = content.substring(0, 100) + "...";

    const newNote = new Note({ title, content, snippet, authorId, authorName });
    await newNote.save();
    res.json({ success: true, note: newNote });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
};

// LIKE a note
export const likeNote = async (req, res) => {
  try {
    const note = await Note.findById(req.params.id);
    if (!note) return res.status(404).json({ success: false, message: "Note not found" });

    note.likes += 1;
    await note.save();
    res.json({ success: true, likes: note.likes });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
};
