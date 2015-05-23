var test = require('tape')
var feedCat = require(process.argv[2])

test('Try the cat on different foods', function (t) {
  t.plan(2)
  t.is(feedCat('catfood'), 'yum', 'catfood is ok')
  t.throws(function () {feedCat('chocolate')})
  t.end()
})