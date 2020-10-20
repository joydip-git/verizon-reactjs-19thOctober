class developer extends employee {
    constructor(name, id, basic, da, hra, incentive) {
        super(name, id, basic, da, hra);
        this.incentive = incentive;
    }
    calculateSalary() {
        const partialSalary = super.calculateSalary()
        return partialSalary + this.incentive
    }
}