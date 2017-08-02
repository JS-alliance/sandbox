
function add (x, y) {
  return x + y
}
var test = 0;
function double (x) {
  console.log('test', test++);
  return add(x, x)
}
function triple (x) {
  console.log('test triple', test++);
  return add(x, 0) * 3;
}


module.exports = {}

module.exports.double = double;
module.exports.triple = triple;