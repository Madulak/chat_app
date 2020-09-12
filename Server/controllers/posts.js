const Post = require('../models/post');
const User = require('../models/user');

exports.createPost = async (req, res, next) => {
  const postText = req.body.postText;
  const file = req.file.path;
  const userId = req.userId;

  const userDoc = await User.findById(userId);


}
