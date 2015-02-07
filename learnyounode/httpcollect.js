var http = require('http')
var url = process.argv[2]
var bl = require('bl')

// Simple Version
// http.get(url, function(res){
//   var output = ""
//   res.on('data', function(data){
//     output += _(data)
//   })

//   res.on('end', function(){
//     console.log(output.length)
//     console.log(output)
//   })
// })

function _(obj){
  return obj.toString()
}

http.get(url, function(res){
  res.pipe(bl(function(err, data){
    if (err)
      return console.log(err)
    console.log(_(data).length)
    console.log(_(data))
  }))
})