const express = require('express');
const router = express.Router();

const isAuth = require('../middleware/isAuth');
const posts = require('../controllers/posts');

router.post('/createpost', isAuth, posts.createPost);

module.exports = router;
