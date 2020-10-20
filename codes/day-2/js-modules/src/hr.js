const { default: emp } = require('./employee')
//const employeeCls = require('./employee');
/**
 * empModule = {
    employeeCls: employee,
    addFn: add
   }
 */
//class hr extends employeeCls.default {
class hr extends emp {
    constructor(name, id, basic, da, hra, gratuity) {
        super(name, id, basic, da, hra);
        this.gratuity = gratuity;
    }
    calculateSalary() {
        const partialSalary = super.calculateSalary()
        return partialSalary + this.gratuity
    }
}

module.exports = hr;