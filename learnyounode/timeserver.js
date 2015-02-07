var net = require('net')
var port = process.argv[2]
var strftime = require('strftime')
var server = net.createServer(function(socket){
  time = getTime()
  socket.end(time+'\n')
})
server.listen(port)

function getTime(){
  return strftime('%Y-%m-%d %H:%M',new Date())
}