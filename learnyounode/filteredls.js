var fs = require('fs');
var path = require('path');
var dirpath = process.argv[2];
var fileType = process.argv[3];
fs.readdir(dirpath, function(err,list){
  for(var i=0;i<list.length;i++){
    if(path.extname(list[i]) == '.'+fileType){
      console.log(list[i]);
    }
  }
});
