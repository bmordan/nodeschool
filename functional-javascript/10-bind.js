// module.exports = function (namespace) {
//   return console.log.bind(namespace, arguments[0])
// }

module.exports = function (namespace) {
  return console.log.bind(console, namespace)
}