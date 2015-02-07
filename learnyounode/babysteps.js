function BabySteps(argvs) {
  var result = 0
  for(var i = 2; i<argvs.length; i+=1) {
    result += Number(argvs[i])
  }
  return result
}
console.log( BabySteps(process.argv) )