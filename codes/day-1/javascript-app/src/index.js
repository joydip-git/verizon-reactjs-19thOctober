//2. constructor function
function person(name, age, id) {
    this.personName = name;
    this.personAge = age;
    this.personId = id;
    this.print = function () {
        return this.personName + ', ' + this.personAge + ', ' + this.personId
    }
}

var anilObjRef = new person('anil', 31, 1);
console.log(anilObjRef.__proto__)

