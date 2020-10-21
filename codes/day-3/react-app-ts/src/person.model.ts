import { textChangeRangeIsUnchanged } from "typescript";

export default interface IPerson {
    name: string,
    id: number,
    age: number
}
export class Trainer implements IPerson {
    // public name: string;
    // public id: number;
    // public age: number;
    constructor(public name: string, public id: number, public age: number, public subject: string) {
        //this.name =name;
        //this.id = id;
    }
}
export class Employee implements IPerson {
    // public name: string;
    // public id: number;
    // public age: number;
    constructor(public name: string, public id: number, public age: number, public salary: number) {
        //this.name =name;
        //this.id = id;
    }
}