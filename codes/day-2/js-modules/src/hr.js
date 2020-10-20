class hr extends employee {
    constructor(name, id, basic, da, hra, gratuity) {
        super(name, id, basic, da, hra);
        this.gratuity = gratuity;
    }
    calculateSalary() {
        const partialSalary = super.calculateSalary()
        return partialSalary + this.gratuity
    }
}