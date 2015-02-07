var five = require('johnny-five')
var events = require('events')
var eventEmitter = new events.EventEmitter()
var board = new five.Board()
board.on('ready', function(){
  var sensor = new five.Sensor('A0')
  var led = new five.Led(13)
  var piezo = new five.Piezo(9)
  var button = new five.Button(5)
  var alarmOn = false
  var reset = false
  
  function temp(v) {
    return ((v * 0.004882814) - 0.5) * 100;
  }
  button.on('press', function(){
    eventEmitter.emit('alarmOff')
    reset = true
    alarmOn = false
  })
  eventEmitter.on('alarmOn', function(){
	led.strobe(500)
	piezo.play({song:[ ['C4',2/4],['D4',2/4] ], tempo: 500})
  })
  eventEmitter.on('alarmOff', function(){
	led.stop().off()
  })  
  sensor.on('data', function(){ 
    var v = temp(this.value)
    console.log(v)
    if(v > 50){
      if(alarmOn === true || reset === true){
	    return
	  }else{
	    eventEmitter.emit('alarmOn')
	    alarmOn = true
	  }
	}else if(v < 49){
      if(alarmOn === true){
		eventEmitter.emit('alarmOff')
		alarmOn = false
	  }else if(reset === true){
	    reset = false
	  }else{
		return 
	  }
	}
  })
  //I struggled with this for about 4 hours! but nailed eventEmitter.emit!
})
