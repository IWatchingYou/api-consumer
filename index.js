const http = require('http');
const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const key = require('./config/keys');

const app = express();

const consumer_routes = require('./src/routes/consumer-routes');

app.use(bodyParser.urlencoded({
  extended: true
}));

app.use(bodyParser.json());

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Headers', 'Origin, Content-Type, Accept, X-Auth-Token');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
  res.setHeader('Access-Control-Allow-Credentials', true);
  next();
});

mongoose.connect(key.mongodb.mongouri, {
  useNewUrlParser: true
});

app.use('/api', consumer_routes);

http.createServer(app);

app.listen(9999);