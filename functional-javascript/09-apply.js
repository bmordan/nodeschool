// var slice = Array.prototype.slice
// function logger (namespace) {
//   var prepend = slice.call(arguments)
//   return function () {
//     console.log(prepend+' '+slice.call(arguments).join(' '))
//   }
// }
// module.exports = logger

var slice = Array.prototype.slice
function logger (namespace) {
  return function () {
    console.log.apply (console, [namespace].concat(slice.call(arguments)))
  }
}
module.exports = logger