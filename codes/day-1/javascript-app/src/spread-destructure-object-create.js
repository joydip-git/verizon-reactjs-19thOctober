//var obj = Object.create({}); //obj = { __proto__:Object.prototype }
//console.log(obj)

// obj.name = "anil";
// obj.age = 20;
// obj.print = function () { return this.name + ', ' + this.age }
// console.log(obj)


const numbers = [1, 2, 3, 4]
// const copyNumbers = Object.create(numbers);
const copyNumbers = [...numbers]
console.log(numbers)
console.log(copyNumbers)
console.log(numbers === copyNumbers)

var joydip = {
    name: 'joydip',
    age: 30,
    friends: ['suresh', 'mahesh']
}

var anil = { ...joydip }
//var anil = Object.create(joydip);
// const anil = {};
// for (const propName in joydip) {
//     anil.propName = joydip[propName]
// }
console.log(anil === joydip)
anil.friends = [...joydip.friends]
console.log(anil.friends === joydip.friends)

//const { name, age } = joydip; //object destructuring
const name = joydip.name;
const age = joydip.age;