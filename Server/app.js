const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const multer = require('multer');

const app = express();

const authRoutes = require('./routes/auth');
const postRoutes = require('./routes/postRoutes');

const MONGODB_URI = 'mongodb://localhost/chat?retryWrites=true';

const fileStorage = multer.diskStorage({
  destination: (req, file, cb) =>  {
    cb(null, 'images');
  },
  filename: (req, file, cb) => {
    cb(null, new Date().toISOString() + '-' + file.originalname);
  }
});

app.use(multer({storage: fileStorage}).array('media', 5))
app.use('/images', express.static(path.join(__dirname, 'images')));
app.use(bodyParser.json());

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
	res.setHeader('Access-Control-Allow-Methods', 'GET, PUT, POST, PATCH,DELETE, OPTIONS');
	res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
	next();
})

app.use(authRoutes);
app.use(postRoutes);

mongoose.connect(MONGODB_URI, {useNewUrlParser: true, useUnifiedTopology: true})
  .then(result => {
    app.listen(8080);
    console.log('Server Running');
  })
  .catch(err => {
    console.log(err);
  });
