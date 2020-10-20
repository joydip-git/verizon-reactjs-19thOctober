// require(['./hr', './developer'], function () {
const hr = require('./hr')
const developer = require('./developer') //{ developer:developer}

const anilDeveloper = new developer('anil', 1, 1000, 2000, 3000, 4000);
const sunilHr = new hr('sunil', 2, 2000, 3000, 4000, 5000);

console.log(`salary of ${anilDeveloper.name} is ${anilDeveloper.calculateSalary()}`)
console.log(`salary of ${sunilHr.name} is ${sunilHr.calculateSalary()}`)
//})//hr


//console.log(module)