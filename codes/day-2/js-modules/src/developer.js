const { addFn: a, default: empCls } = require('./employee')
/**
 * empModule = {
    employee,
    addFn: add
   }
 */

class developer extends empCls {
    constructor(name, id, basic, da, hra, incentive) {
        super(name, id, basic, da, hra);
        this.incentive = incentive;
    }
    calculateSalary() {
        const partialSalary = super.calculateSalary()
        return partialSalary + this.incentive
    }
}
console.log(a(10, 20));
module.exports = developer;