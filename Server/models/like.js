const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const likeSchema = new Schema({
  likeCreator: {
    type: Schema.Types.ObjectId,
    ref: 'User',
  }
},{timestamps: true});

module.exports = mongoose.model('Like', likeSchema);
