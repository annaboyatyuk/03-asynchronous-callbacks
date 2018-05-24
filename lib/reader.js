'use strict';


const fs = require('fs');


module.exports = exports = (paths, callback) => {
  

  fs.readFile(paths, (err, data) => {
    setTimeout(() => {
      if(err) {throw err;}
      else {

        callback(undefined, data.toString().trim());

      }
    },500);
  });

};


