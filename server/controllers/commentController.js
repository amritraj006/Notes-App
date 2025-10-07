import Comment from "../models/Comment.js";

// GET comments by noteId
export const getCommentsByNote = async (req, res) => {
  try {
    const comments = await Comment.find({ noteId: req.params.noteId });
    res.json({ success: true, comments });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
};

// CREATE a new comment or reply
export const createComment = async (req, res) => {
  try {
    const { noteId, userId, username, text, parentCommentId } = req.body;
    const newComment = new Comment({
      noteId,
      userId,
      username,
      text,
      parentCommentId: parentCommentId || null,
    });
    await newComment.save();
    res.json({ success: true, comment: newComment });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
};

// DELETE comment & its replies recursively
export const deleteComment = async (req, res) => {
  try {
    const commentId = req.params.id;
    await Comment.findByIdAndDelete(commentId);

    const deleteReplies = async (parentId) => {
      const replies = await Comment.find({ parentCommentId: parentId });
      for (let reply of replies) {
        await Comment.findByIdAndDelete(reply._id);
        await deleteReplies(reply._id);
      }
    };

    await deleteReplies(commentId);

    res.json({ success: true, message: "Comment and its replies deleted." });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
};
