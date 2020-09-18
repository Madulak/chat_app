const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const postSchema = new Schema({
  postText: {
    type: String,
  },
  mediaUrl: {
    type: String,
  },
  postCreator: {
    type: Schema.Types.ObjectId,
    ref: 'User'
  },
  type: {
    type: String,
  },
  like: [{
    type: Schema.Types.ObjectId,
  }],
  comment: [{
    type: Schema.Types.ObjectId,
  }],
}, {timestamps: true})

module.exports = mongoose.model('Post', postSchema);
