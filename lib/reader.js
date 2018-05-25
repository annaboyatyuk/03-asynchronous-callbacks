'use strict';


const fs = require('fs');


module.exports = exports = (paths, callback) => {

  let arr = [];
  
  for(let i = 0; i < paths.length; i++) {

    fs.readFile(paths[i], (err, data) => {
      // setTimeout(() => {
      if(err) {callback(err);}
      else {
        arr[i] = (data.toString().trim());
        
      }
      if(arr.length === paths.length) {
          
        callback(null, arr);
      }
      // },0);
    });
    
  }



};


