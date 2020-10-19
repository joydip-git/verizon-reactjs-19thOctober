//2. constructor function
var person = function (name, age, id) {
    this.personName = name;
    this.personAge = age;
    this.personId = id;
    this.print = function () {
        return this.personName + ', ' + this.personAge + ', ' + this.personId
    }
}
console.log(Object.prototype) //prototype object for function: Object (top level function)
console.log(person.prototype) //prototype object for function: person
Object.prototype.show = function(){
    console.log('common show')
}

var anilObjRef = new person('anil', 31, 1);
console.log(anilObjRef.__proto__)
console.log(person.prototype === anilObjRef.__proto__)

console.log(Object.prototype.hasOwnProperty('show'))
console.log(person.prototype.hasOwnProperty('show'))
console.log(anilObjRef.hasOwnProperty('show'))
anilObjRef.show();

var sunilObjRef = new person('sunil', 41, 2);
sunilObjRef.show = function () {
    console.log('sunils show')
}
console.log(sunilObjRef.hasOwnProperty('show'))
sunilObjRef.show()
/*
console.log(anilObjRef.print())



// person('anil', 31, 1);
console.log(window)
// console.log(window.personName)
// console.log(window.personAge)
// console.log(window.personId)

*/