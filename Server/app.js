const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const app = express();

const MONGODB_URI = 'mongodb://localhost/chat?retryWrites=true';


mongoose.connect(MONGODB_URI, {useNewUrlParser: true, useUnifiedTopology: true})
  .then(result => {
    app.listen(8080);
    console.log('Server Running');
  })
  .catch(err => {
    console.log(err);
  });
