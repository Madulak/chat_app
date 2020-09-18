const express = require('express');
const router = express.Router();

const isAuth = require('../middleware/isAuth');
const posts = require('../controllers/posts');

router.post('/createpost', isAuth, posts.createPost);

router.get('/posts', posts.getFindAllPosts);

router.post('/like/:id',  posts.postLike);

module.exports = router;
