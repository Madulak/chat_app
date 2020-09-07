const bcrypt = require('bcryptjs');
const User = require('../models/user');
const jwt = require('jsonwebtoken');

exports.postSignup = async (req, res, next) => {
  const username = req.body.username;
  const email = req.body.email;
  const password = req.body.password;

  try {
    const userDoc = await User.findOne({email: email});
    if(userDoc) {
      console.log('User Exist');
    }
    const hashedPassword = await bcrypt.hash(password, 12);
    const newUser = new User({
      username: username,
      email: email,
      password: hashedPassword,
    })
    await newUser.save();
    res.status(201).json({message: 'User Created!'});
  } catch(error) {
    console.log(error);
  }
}

exports.postLogin = async (req, res, next) => {
  const email = req.body.email,
  const password = req.body.password;

  try {
    const userDoc = await User.findOne({email: email});
    if (!userDoc) {
      console.log('User Exist');
    }
    const checkPassword = await bcrypt.compare(password, userDoc.password);
    if(!checkPassword) {
      console.log('Wrong Password');
    }
    console.log('Logged In');
    const token = jwt.sign({
      userId : userDoc.user._id.toString(),
      username: userDoc.username,
    }, 'somesupersecretsecret', { expiresIn : '1h'})
    res.status(200).json({token: token, username: userDoc.username, userId: userDoc._id.toString()})
  } catch (e) {
    console.log(e);
  }

}
