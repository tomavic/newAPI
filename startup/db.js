const winston = require('winston');
const mongoose = require('mongoose');
const config = require('config');
const username = 'tomas';
const password = 'tomas%40admin19';

const LiveDBURL = `mongodb+srv://${username}:${password}@cluster0-liccb.mongodb.net/test?retryWrites=true`
module.exports = function() {
  // const db = config.get('db');
  const db = LiveDBURL;

  mongoose.connect(db, { useNewUrlParser: true, useCreateIndex: true, })
    .then(() => winston.info(`Connected to ${db}...`));
}