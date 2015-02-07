var fs = require('fs')
var file = process.argv[2]

fs.readFile( file, function ( err, fileContent ) {
  if (!err)
    var lines = fileContent.toString().split('\n')
    console.log(lines.length-1)
})


