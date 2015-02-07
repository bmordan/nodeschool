var fs = require('fs')
var file = process.argv[2]
var buffer = fs.readFileSync(file)
var fileContentString = buffer.toString()

function lineCountThis(file) {
  var result = 0
  var fileContentAsArray = file.split('\n')
  result += fileContentAsArray.length-1
  return result
}
console.log(lineCountThis(fileContentString))