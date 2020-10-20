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