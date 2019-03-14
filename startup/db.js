const winston = require('winston');
const mongoose = require('mongoose');
const config = require('config');
const username = 'boy';
const password = 'ssLTBCiuQcgskAHu';

const LiveDBURL = `mongodb+srv://${username}:${password}@pm-liccb.mongodb.net/test?retryWrites=true`;

// const uri = "mongodb+srv://${username}:${password}@pm-liccb.mongodb.net/test?retryWrites=true";
module.exports = function() {
  const db = config.get('liveDB');
  // const db = LiveDBURL;

  mongoose.connect(db, { useNewUrlParser: true, useCreateIndex: true, })
    .then(() => winston.info(`Connected to ${db}...`));
}