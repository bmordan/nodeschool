var fs = require('fs');
var path = require('path');

module.exports = function(dirpath, fileType, print){
  fs.readdir(dirpath, function(err, files){
    if(err)
      return print(err)
    var filteredArrayOfFiles = []
    for(i=0;i<files.length;i+=1){
      if(path.extname(files[i]) == '.'+fileType)
        filteredArrayOfFiles.push(files[i])
    }
    print(null, filteredArrayOfFiles)
  }) 
}