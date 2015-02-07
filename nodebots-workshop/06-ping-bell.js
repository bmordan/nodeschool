var five = require('johnny-five')
var board = new five.Board()
var dgram = require('dgram')
var server = dgram.createSocket('udp4')
board.on('ready', function(){
  var piezo = new five.Piezo(8)
  server.on('message', function(msg, rinfo){
    piezo.play({
    // song is composed by an array of pairs of notes and beats
    // The first argument is the note (null means "no note")
    // The second argument is the length of time (beat) of the note (or non-note)
    song: [
      ["C4", 1/4],
      ["D4", 1/4],
      ["F4", 1/4],
      ["D4", 1/4],
      ["A4", 1/4],
      [null, 1/4],
      ["A4", 1],
      ["G4", 1],
      [null, 1/2],
      ["C4", 1/4],
      ["D4", 1/4],
      ["F4", 1/4],
      ["D4", 1/4],
      ["G4", 1/4],
      [null, 1/4],
      ["G4", 1],
      ["F4", 1],
      [null, 1/2]
    ],
    tempo: 100
  });
  })
  server.bind(1337)
})
