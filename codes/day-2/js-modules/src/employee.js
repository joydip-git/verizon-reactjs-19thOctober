class employee {
    constructor(name, id, basic, da, hra) {
        this.name = name;
        this.id = id;
        this.basic = basic;
        this.da = da;
        this.hra = hra;
    }
    calculateSalary() {
        return this.basic + this.da + this.hra;
    }
}
const add = (a, b) => (a + b);

// module.exports = {
//     employeeCls: employee,
//     addFn: add
// }
let exp = module.exports;
exp["default"] = employee;
exp.addFn = add;

console.log(module)

//export default 