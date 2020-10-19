//console.log(x)
//var x;
let x = 10;
console.log(x)
for (let i = 0; i < 2; i++) {
    //var x;
    let x = 20;
    console.log(x)
}
console.log(x)

const a = 20;
//a = 30;
console.log(a)
const numbers = [1, 2, 3, 4];
//const numbers1 = new Array(1, 2, 3, 4);
console.log(numbers)
numbers.push(10);
numbers[2] = 300
console.log(numbers)
numbers = new Array(10, 20);
//1. preparation
/**
 * var globalContextObj = {
     obj1:{x:undefined}
     obj2:{

     }
 *   fn: for...{x:undefined}
 * }
 */
//2. actual execution
/**
 * var globalContextObj = {
 *   x:10,
 *   fn: for...
 * }
 * window = {
 *  x
 * }
 */