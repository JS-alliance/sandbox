var double = require('./double.js');
var doubleV2 = require('./double.js');
// 2 of the same are 'required' to test if each carries with it its own instance of variables.


console.log(double.double(7));
console.log(double.double.ref);
console.log(doubleV2.double(7));
console.log(double.double.ref);

console.log(double.triple(7));
console.log(double.triple(7));
console.log(doubleV2.triple(7));
console.log(doubleV2.triple(7));

// Notice that when the the functions are invoked, they all reference the same instances of the 'test' variable in 'double.js'
// Also notice that the 'ref' property on double.double is accessible even though it is added after the functions are exported in 'double.js'