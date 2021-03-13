
// You should implement your task here.

module.exports = function towelSort (matrix) {
  if(!matrix) return [];
  let res = [];
  let result = matrix.map((item,index) => (index % 2 != 0) ? item.reverse() : item);
  for( let item of result) {

    res = res.concat(item);

  }

  return res;
}
