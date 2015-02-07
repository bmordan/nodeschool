var http = require('http')
var bl = require('bl')
var urls = process.argv.slice(2)
var callbackCount = urls.length
var que = []

urls.map(function(url){
  var position = urls.indexOf(url)
  http.get(url, function(res){
    res.pipe(bl(function(err, data){
      if(err) return
      que[position] = data.toString()
      callbackCount -=1
    }))
    res.on('end', function(){
      if(callbackCount === 0)
        print(que)
    })
  })
})

function print(que){
  console.log(que[0])
  console.log(que[1])
  console.log(que[2])
}
