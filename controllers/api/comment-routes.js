const router = require('express').Router();
const { Comment } = require('../../models/');
const withAuth = require('../../utils/auth');

// URL: /api/comment
router.post('/', withAuth, async (req, res) => {
  console.log("post /api/comment");
  const body = req.body;
  try {
    const newComment = await Comment.create({
      ...body,
      userId: req.session.userId
    });
    res.json(newComment);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
