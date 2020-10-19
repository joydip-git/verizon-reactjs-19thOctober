class Person {
    name;
    age;
    //static data;
    constructor(age, name = null) {
        this.name = name;
        this.age = age;
    }
    static test() {
        console.log('test')
    }
    print() {
        return `Name:${this.name}, 
        Age:${this.age}`;
    }
    get Name() {
        return this.name;
    }
    set Name(value) {
        this.name = value;
    }
    get Age() {
        return this.age;
    }
    set Age(age) {
        this.age = age;
    }
}
//Person.test(100)
//console.log(Person.data)
const anil = new Person(30);

// anil.Name = 'anil'
// anil.Age = 30;
// console.log(anil.Name)
//console.log(anil.Age)
console.log(anil.print())


const add = (a, b, c) => (a + b + c);
const subtract = (a, b) => (a - b);

const calculate = (operation, ...arg) => {
    operation()
}
calculate(add, 10, 20, 30);
calculate(subtract, 30, 40)

const design = `<p style='background-color:lime'>
                    <span>
                    ${add(12, 13, 14)}
                    </span>
               </p>`;
//console.log(design)
document.getElementById('app').innerHTML = design;
