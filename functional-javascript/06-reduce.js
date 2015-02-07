function countWords (inputWords) {
  return inputWords.reduce( function (acc, curr, index, arr) {
    if(acc[curr] === undefined){
      acc[curr] = 1
    }else{
      acc[curr] = acc[curr] + 1
    }
    return acc
  },{})
}
module.exports = countWords