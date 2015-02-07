function repeat (operation, num) {
  if (num <= 0) return
  operation()
  return repeat(operation, --num)
}
module.exports = repeat

// my novice approach
// function repeat(operation, num) {
//   var count = 0
//   for(var i=0;i<num;i+=1)
//     operation()
// }
// module.exports = repeat