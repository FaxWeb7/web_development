const express = require('express');
const {
  getPost,
  deletePosts,
  getPosts,
  getAddPost,
  editPost,
  getEditPost,
  addPost
} = require('../controllers/post-controller');

const router = express.Router();

router.post('/add-post', addPost)
router.get('/edit/:id', getEditPost);
router.put('/edit/:id', editPost);
router.get('/posts/:id', getPost);
router.delete('/posts/:id', deletePosts);
router.get('/posts', getPosts);
router.get('/add-post', getAddPost);

module.exports = router;

