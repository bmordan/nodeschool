Spy = function (target, method) {
  var count = {count:0}
  var fn = target[method]
  target[method] = function () {
    count.count += 1
    return fn.apply(target, arguments)
  }
  return count
}
module.exports = Spy