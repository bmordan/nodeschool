var five = require('johnny-five')
var dnode = require('dnode')
var board = new five.Board()
board.on('ready', function(){
  var sensor = new five.Sensor('A0')
  var temp = 0
  sensor.on('data', function(){
	temp = ((this.value * 0.004882814) - 0.5) * 100  
  })
  var server = dnode({
    getTemperature : function(cb){ cb(temp) }
  })
  server.listen(1337)
})
