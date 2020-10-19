//arrow operator
var subtract = (x, y) => x > y ? x - y : y - x;
var res = subtract(12, 3);
console.log(res)

var person = function () {
    this.x = 10;
    console.log(this)
    //var ref = this;
    // var some = function () {
    var some = () => {
        this.y = 20;
        console.log(this)
        console.log(this.x)
        console.log(this.y)
        //return (ref.x + this.y)
        return (this.x + this.y)
    }
    //return this;
    // var someBoundFn = some.bind(this);   
    // console.log(someBoundFn());
    console.log(some())
}
var p = new person();

//console.log(someFn());