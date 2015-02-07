var five = require('johnny-five')
var board = new five.Board()
board.on('ready', function(){

  var wheel = new five.Servo({
    pin: 12,
    type: 'continuous'
  })

  var led = new five.Led(13)

  board.repl.inject({ 
    wheel: wheel, 
    led: led
  })

})