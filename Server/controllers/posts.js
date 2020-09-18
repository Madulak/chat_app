const Post = require('../models/post');
const User = require('../models/user');
const Comment = require('../models/comment');

exports.createPost = async (req, res, next) => {
  const postText = req.body.postText;
  const file = req.file.path;
  const userId = req.userId;
  const fileType = req.file.mimetype;

  console.log(req.file);

  try {
    let newPost;
    const userDoc = await User.findById(userId);
    if (!userDoc) {
      console.log('user Does not Exist');
    }
      newPost = new Post({
        postText: postText,
        mediaUrl: file,
        type: fileType,
        postCreator: userId,
      })
      await newPost.save();
      res.status(201).json({message: 'Post Created'})
      console.log('Post Created!')
  } catch (error) {
    console.log(error);
  }
}

exports.getFindAllPosts = async (req, res, next) => {

  try {
    const postDoc = await Post.find()
      .populate('postCreator')
      .sort({createdAt: -1})
    res.status(200).json({ data: postDoc});
  } catch (error) {
    console.log(error);
  }
}


exports.postDeletepost = async (req, res, next) => {
  const postId = req.params.id;
  const userId = req.userId;

  try {
    const userDoc = await User.findById(userId);
    if (!userDoc) {
      console.log('no user');
    }
    const postDoc = await User.findByIdAndRemove(postId);
    console.log(postDoc);
    res.status(202).json({message : 'Post Deleted!'});
  } catch (error) {
    console.log(error)
  }
}

exports.postComment = async (req, res, next) => {
  const postId = req.params.id;
  const userId = req.userId;
  const comment = req.body.comment;

  try {
    const userDoc = await User.findById(userId);
    if(!userDoc) {
      console.log('User does not Exist!');
    }
    const postDoc = await Post.findById(postId);
    const newComment = new Comment({
      commentText: comment,
      commentCreator: userDoc._id,
    })
    await newComment.save();
    postDoc.comment.push(newComment);
    await postDoc.save();
  } catch (error) {
    console.log(error);
  }
}

exports.postLike = async (req, res, next) => {
  const postId = req.params.id;
  const userId = req.userId;

  console.log('Post Id');
  console.log(postId);
  console.log(req.body)

  // try {
  //   const userDoc = await User.findById(userId);
  //   if (!userDoc) {
  //     console.log('No user Found!');
  //   }
  //   const postDoc = await Post.findById(postId);
  //   // const findLike = await Post.find({postDoc.like: userDoc._id})
  //
  // } catch (error) {
  //   console.log(error);
  // }
}
