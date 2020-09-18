const User = require('../models/user');

exports.getAllUsers = async (req, res, next) => {

  try {
    const userDoc = await User.find()
      .limit(3)

    res.status(200).json({ data: userDoc })
  } catch (error) {
    console.log(error);
  }
}
