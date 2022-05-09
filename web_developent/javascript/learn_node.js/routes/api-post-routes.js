const express = require('express');
const {
  getPost,
  deletePosts,
  getPosts,
  editPost,
  addPost
} = require('../controllers/api-post-controller');

const router = express.Router();

//Get all posts
router.get('/api/posts', getPosts);
// Add new Post
router.post('/api/post', addPost)
//Get post by id
router.get('/api/posts/:id', getPost);
//Delete Post by id
router.delete('/api/posts/:id', deletePosts);
//Update Post by id
router.put('api/post/:id', editPost);

//лишние контроллеры удаляем
//router.get('/edit/:id', getEditPost);
//router.get('/add-post', getAddPost);

module.exports = router;

