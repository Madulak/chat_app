const Post = require('../models/post');
const User = require('../models/user');
const Comment = require('../models/comment');
const Like = require('../models/like');

exports.createPost = async (req, res, next) => {
  const postText = req.body.postText;
  const file = req.file.path;
  const userId = req.userId;
  const fileType = req.file.mimetype;

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

  const userId = req.params.id;
  let like;
  try {
    const postDoc = await Post.find()
      .populate('postCreator')
      .populate('like')
      .sort({createdAt: -1})

    postDoc.forEach(el => {
       like = postDoc.find(element => element.like.likeCreator === userId)
      console.log(like)
    })
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
  console.log(userId);

  let newLike;

  try {
    const userDoc = await User.findById(userId);
    if (!userDoc) {
      console.log('No user Found!');
    }
    const postDoc = await Post.findById(postId)
      .populate('like')

      console.log('Post  ',postDoc.like);
      console.log('UserId ', userDoc._id);
      const array = postDoc.like.find((item) => item.likeCreator == userId);
      console.log('Filtered ',array);

    if(array === undefined ){
    newLike = new Like({
      likeCreator: userId,
    })
    const results = await newLike.save();
    console.log('RESULTS ',results);
    postDoc.like.push(newLike);
    await postDoc.save();
    console.log('Post Doc ', postDoc);
  } else  {
      console.log('ArrayId ',array._id);
      const findLike = await Like.findByIdAndRemove(array._id);
      console.log('Find By Id ', findLike);
      const removeLike = postDoc.like.filter(el => el.likeCreator != userId);
      postDoc.like = removeLike;
      console.log('Remove Like ', removeLike);
      const results = await postDoc.save();
      console.log('Results ', results);
    }

  } catch (error) {
    console.log(error);
  }
}

exports.getPhotos = async (req, res, next) => {

  try {
    const postDoc = await Post.find()
      .populate('postCreator')
      .sort({createdAt: -1})
    const photos = postDoc.filter(el => el.type.startsWith('image'));
    // console.log(array);
    res.status(200).json({data: photos})
  } catch (error) {
    console.log(error);
  }
}

exports.getVideos = async (req, res, next) => {

  try {
    const postDoc = await Post.find()
      .populate('postCreator')
      .sort({createdAt: -1})
    const videos = postDoc.filter(el => el.type.startsWith('video'));
    res.status(200).json({data: videos})
  } catch (error) {
    console.log(error);
  }
}
