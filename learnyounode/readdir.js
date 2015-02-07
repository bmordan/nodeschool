var fs = require('fs')
var path = process.argv[2]
var filterByThisExt = process.argv[3]
fs.readdirSync(path, function(err, list) {
  for(i=0;i<list.length;i+=1){
    if (filterByThisExt === list[i].split('.')[1])
      console.log(list[i])
  }
});