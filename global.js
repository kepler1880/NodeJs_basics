const path = require('path');

console.log('Hello');

let var1= 'Hello world';
console.log(var1);


let var2= var1.slice(5);
console.log(var2);

console.log(`who let the ${var2}  out?`);

console.log(__dirname);
console.log(__filename);

console.log(` The filename is  ${path.basename(__filename)}`);

for (let key in global){
    console.log(key);
}


console.log(process.argv)