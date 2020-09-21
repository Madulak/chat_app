const express = require('express');
const router = express.Router();

const isAuth = require('../middleware/isAuth');
const posts = require('../controllers/posts');

router.post('/createpost', isAuth, posts.createPost);

router.get('/posts', posts.getFindAllPosts);

router.get('/photos', posts.getPhotos);

router.get('/videos', posts.getVideos);

router.post('/like/:id', isAuth, posts.postLike);

module.exports = router;
