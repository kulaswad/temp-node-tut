console.log('Hello World');
// console.log(global);
const os = require('os')
// console.log(os.type());
// console.log(os.version());
// console.log(os.homedir());

// console.log(__dirname)
// console.log(__filename)

const path = require('path')
// console.log(path.dirname(__filename))
// console.log(path.basename(__filename))
// console.log(path.extname(__filename))

console.log(path.parse(__filename))

const {add,subtract,mul,div} = require('./01-math')

console.log(add(2,5))
console.log(subtract(2,5))
console.log(mul(2,5))
console.log(div(10,5))