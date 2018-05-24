'use strict';


const fs = require('fs');


const reader = ((paths, callback) => {
  

  fs.readFile(paths, (err, data) => {
    if(err) {
      callback(err);
    }
    else {
      callback(undefined, data.toString().trim());
    }
  });

});

module.exports = reader;


