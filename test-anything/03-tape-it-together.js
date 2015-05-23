var assert = require('assert')
var test = require('tape')
var fancify = require(process.argv[2])

test('fancify returns a string wrapped in ~*~', function (t) {
  t.plan(1)
  t.equals(fancify('test'), '~*~test~*~', 'fancy syntax added ok')
  t.end()
})

test('fancify can upcase your input', function (t) {
  t.plan(1)
  t.equals(fancify('test', true), '~*~TEST~*~', 'can upcase with true flag')
  t.end()
})

test('fancify out can be altered', function (t) {
  t.plan(1)
  t.equals(fancify('test', false, '@'), '~@~test~@~', 'swap out the char ok')
  t.end()
})