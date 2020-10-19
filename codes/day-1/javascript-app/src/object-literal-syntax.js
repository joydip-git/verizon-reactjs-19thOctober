//1. Object Literal Syntax
var joydip = {
    name: 'Joydip',
    age: 30,
    id: 1,
    print: function () {
        return this.name + ', ' + this.age + ', ' + this.id;
    }
}

console.log(joydip.name);
console.log(joydip['age']);
var info = joydip.print();
console.log(info)

joydip.location = "Bangalore";

for (var propertyName in joydip) {
    var propertyValue = joydip[propertyName]
    console.log(propertyName + ": " + propertyValue)
}

console.log(joydip)