var dirpath = process.argv[2];
var fileType = process.argv[3];
var readFile = require('./modular_module');
var print = function(err, array){
  if(err) return
  for(i=0;i<array.length;i+=1){
    console.log(array[i])
  }
}
readFile(dirpath,fileType,print)