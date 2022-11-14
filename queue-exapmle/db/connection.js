const mongoose = require('mongoose');
const config = require('../configure/configure')

async function connect() {
  return new Promise((resolve, reject) => {

    try {
      resolve(mongoose.connect(config.mongourl));
    } catch (err) {
      reject("error in db connection " + err);
    }
  });
}

module.exports = connect;



