const Post = require('../models/post');
const User = require('../models/user');

exports.createPost = async (req, res, next) => {
  const postText = req.body.postText;
  const file = req.file;
  const userId = req.userId;

   console.log(req.body);
  console.log(req.files);

  // const userDoc = await User.findById(userId);


}
