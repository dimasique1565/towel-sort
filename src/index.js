
// You should implement your task here.

module.exports = function towelSort (matrix) {
  if(!matrix) return [];
  let result = [];
  for(let i = 0; i < matrix.length; i++) {
    result = result.concat(i % 2 ? matrix[i].reverse() : matrix[i]);
  }
  return result;
}
