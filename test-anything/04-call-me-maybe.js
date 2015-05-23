var test = require('tape')
var repeatCallback = require(process.argv[2])

test('cb is called 7 times', function (t) {
  t.plan(7)
  repeatCallback(7, t.pass)
  t.end()
})