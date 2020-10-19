//ECMAScript - 2015 (ES6)
class employee {
    // name = null;
    // id = undefined;
    // basicPay, daPay, hraPay
    constructor(name, id, basicPay, daPay, hraPay) {
        this.name = name;
        this.id = id;
        this.basicPay = basicPay;
        this.daPay = daPay;
        this.hraPay = hraPay;
    }
    calculateSalary() {
        return this.basicPay + this.daPay + this.hraPay;
    }
}
class developer extends employee {
    incentivePay = 0;
    constructor(name, id, basicPay, daPay, hraPay, incentivePay) {
        super(name, id, basicPay, daPay, hraPay);
        this.incentivePay = incentivePay;
        //this.calculateSalary = this.calculateSalary.bind(this)
        //apply, call
    }
    calculateSalary = () => {
        var partialSalary = super.calculateSalary();
        return partialSalary + this.incentivePay;
    }
}

//mix-in (Mixin)

var utility = {
    sayHi: function () {
        this.sayBye();
    },
    sayBye: function () {
        console.log('Bye...' + this.name)
    }
}
var anotherUtility = {
    print: function () {
        console.log('print')
    }
}
Object.assign(developer.prototype, utility, anotherUtility);
console.log(developer.prototype)
var anilDev = new developer('anil', 1, 1000, 2000, 3000, 4000);
// console.log(anilDev.calculateSalary())
printSalarySleep(anilDev.calculateSalary)
console.log(anilDev.hasOwnProperty('sayHi'))
anilDev.sayHi()

function printSalarySleep(salaryFn) {
    console.log(this)
    console.log(salaryFn())
}
//printSalarySleep();
