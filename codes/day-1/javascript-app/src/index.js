// function Object(){
//     //code
// }
//Object.prototype = refers to the prototype object of Object function
//Object.prototype.constructor = refers to the function itself
//Object.prototype.__proto__=null;
function employee(name, id, basicPay, daPay, hraPay) {
    console.log(this)
    this.name = name;
    this.id = id;
    this.basicPay = basicPay;
    this.daPay = daPay;
    this.hraPay = hraPay;
    // this.calculateSalary = function () {
    //     console.log(this)
    //     return this.basicPay + this.daPay + this.hraPay;
    // }
}
employee.prototype.calculateSalary = function () {
    console.log(this)
    return this.basicPay + this.daPay + this.hraPay;
}
//employee.prototype = refers to the prototype object of employee function
//employee.prototype.constructor = refers to the function itself
//employee.prototype.__proto__=refers to the prototype object of Object function
// function calculateSalary() {
//     console.log(this)
//return this.basicPay + this.daPay + this.hraPay;
// }
function developer(name, id, basicPay, daPay, hraPay, incentivePay) {
    //call function sets the context of this keyword in the called function first
    //then invokes/executes the code inside the called function
    employee.call(this, name, id, basicPay, daPay, hraPay);
    this.incentivePay = incentivePay;
    // var calculateSalary = function () {
    //     return 10000;
    // }
    this.calculateSalary = function () {
        var partialSalary = this.__proto__.calculateSalary.apply(this)
        //var partialSalary = calculateSalary()
        console.log(partialSalary)
        return partialSalary + this.incentivePay;
    }
}
Object.setPrototypeOf(developer.prototype, employee.prototype)
//developer.prototype.calculateSalary = function(){}
//developer.prototype = refers to the prototype object of employee function
//developer.prototype.constructor = refers to the function itself
//developer.prototype.__proto__=refers to the prototype object of Object function

function hr(name, id, basicPay, daPay, hraPay, gratuityPay) {
    employee.call(this, name, id, basicPay, daPay, hraPay);
    this.gratuityPay = gratuityPay;
    this.calculateSalary = function () {
        var partialSalary = this.__proto__.calculateSalary.apply(this)
        return partialSalary + this.gratuityPay;
    }
}
Object.setPrototypeOf(hr.prototype, employee.prototype)
//hr.prototype.calculateSalary = function(){}


var anilDeveloper = new developer('anil', 1, 1000, 2000, 3000, 4000);
//console.log(anilDeveloper.calculateSalary());
//anilDeveloper.__proto__=refers to the prototype object of developer function
//anilDeveloper.__proto__=refers to the prototype object of employee function

var sunilHr = new hr('sunil', 2, 2000, 3000, 3000, 4000)
//sunilHr.__proto__=refers to the prototype object of hr function
//sunilHr.__proto__=refers to the prototype object of employee function

console.log(developer.prototype)
console.log(anilDeveloper.__proto__)

console.log(hr.prototype)
console.log(sunilHr.__proto__)

console.log(anilDeveloper.calculateSalary());
console.log(sunilHr.calculateSalary());