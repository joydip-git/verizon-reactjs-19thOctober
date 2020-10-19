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
}
employee.prototype.calculateSalary = function () {
    console.log(this)
    return this.basicPay + this.daPay + this.hraPay;
}
//employee.prototype = refers to the prototype object of employee function
//employee.prototype.constructor = refers to the function itself
//employee.prototype.__proto__=refers to the prototype object of Object function

function developer(name, id, basicPay, daPay, hraPay, incentivePay) {
    //call function sets the context of this keyword in the called function first
    //then invokes/executes the code inside the called function
    employee.call(this, name, id, basicPay, daPay, hraPay);
    this.incentivePay = incentivePay;
    this.calculateSalary = function () {
        var partialSalary = employee.prototype.calculateSalary.apply(this)
        console.log(partialSalary)
        return partialSalary + this.incentivePay;
    }
}
//developer.prototype = refers to the prototype object of developer function
//developer.prototype.constructor = refers to the function itself
//developer.prototype.__proto__=refers to the prototype object of Object function

var anilDeveloper = new developer('anil', 1, 1000, 2000, 3000, 4000);
console.log(anilDeveloper.calculateSalary());
//anilDeveloper.__proto__=refers to the prototype object of developer function


