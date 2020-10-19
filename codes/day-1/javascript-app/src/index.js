function person(name) {
    this.name = name;
}
//quite same
// var person = function (name) {
//     this.name = name;
// }

//for person function there is an object created by JS runtime
//known as prototype object of peeson function
//created for inheritance purpose
//you can acccess the object by using 'prototype' property of the function (the function name is practically a variable)
console.log(person.prototype)
/**
 * person.prototype = {
 * constructor: person,
 * __proto__:
 * }
 */

//__proto__ is a property part of every JS object whicbh holds a reference to  the linked object.
//such as person.prototype is an object, which has __proto__ property which links this object to another object
//function-name.prototype
//anyobject.__proto__
var joy = {
    //__proto__:
    name: 'joy'
}