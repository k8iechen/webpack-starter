import '../styles/index.scss';

console.log('Hello World~');

//JS Language Features
//========================================================================

//const
const id1 = 55;

//let & var
let id2 = 56;
var id3 = 57;

//Rest Parameter
function sendid(days, ...allids) {
    allids.forEach(id => console.log(id));
}
sendid("may 21", 1, 2, 3, 4);
//1 2 3 4

let carIds = [1, 2, 3, 4, 5];
let car1, car2, othercars;
[car1, car2, ...othercars] = carIds;
console.log(car1, car2);
//1 2
console.log(car1, othercars);
//1 (3) [3, 4, 5] 

//Destructuring Objects
let car = { id: 5000, style: 'convertible' };
//let { id, style } = car;
//OR destructuring
let id, style;
({ id, style } = car);
console.log(id, style);
//5000 "convertible"

//Spread Syntax
function startCars(c1, c2, c3) {
    console.log(c1, c2, c3);
}
//let cars = [1000, 2000, 3000];
let cars = 'abcd';
startCars(...cars);
//a b c

//typeof()
typeof (1); //number
typeof (true); //boolean
typeof ('Hello'); //string
typeof (function () { }); //string
typeof ({}); //object
typeof (null); //object
typeof (undefined); //undefined
typeof (NaN); //number

//Type Conversions
console.log(Number.parseInt('7382nsjUASb289')); //7382
console.log(Number.parseFloat('3728.0978n320.902389dniw')); //3728.0978
//stops at first non-number chars

//loops
let i = 0;
for (; i < 10; i++) {
    if (i == 5) {
        break;
    }
    if (i === 2) {
        continue;
    }
    console.log(i);
}
//0 1 3 4
//use only when necessary

//Operators
//========================================================================

//Equality Operators
//auto type conversion; value comparison
console.log(1 == '1');  //true
//no type conversion; value & type comparison
console.log(1 === '1'); //false

//Unary Operator
let year = 2000;
//add after first call
console.log(year++); //2000
console.log(year); //2001
//add before first call
console.log(++year); //2002
//change type to number
let yearstr = '2000';
console.log(typeof (yearstr)); //string
console.log(typeof (+yearstr)); //number

//Logical Operator
//AND (higher precedence than OR)
console.log(5 === 5 && 6 === 3); //false
//OR
let userSettings = { name: 'Bob' };
let defaultSettings = { name: 'Default' };
console.log(userSettings || defaultSettings);
//NOT
let n = null;
if (!n) { //if value is null, action
    console.log("something");
}

//Relational Operators
//ascii values compared - capital letters come before lowercase
//convert all to upper or lowercase before comparing

//Conditional Operators
console.log(4 <= 7 ? "Y" : "N"); //Y

//Assignment Operators
/*
    +=
    -= 
    /= 
    *=
    %= 
    <<= 
    >>= 
    shift while keeping sign:
    >>>=
*/

//Operator Precedence
//link: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Operator_Precedence

//Functions & Scope
//=========================================================================

//Function
function startCar(carId) {
    let message = 'Starting...';
    let startFn = function turnKey() {
        let message = 'Override';
    };
    startFn();
    console.log(message); //Starting...
}
startCar(123);

//Block Scope
let msg = 'Outside';
if (7 === 7) {
    let msg = 'Equal';
    console.log(msg); //Equal
    //same var names temporarily override global var
}
console.log(msg); //Outside
//would print "Equal" if var used instead of let since var has no block scope
//let preferred to prevent accidental override

//IIFEs: Immediately Invoked Function Expression
//running function immediately after it's declared

let app = (function () {
    let ID = 123;
    console.log('in function');
    return {};
})();
console.log(app); //returns {}

//Closures
let app1 = (function () {
    let ID = 123;
    let getID = function () {
        return ID;
    };
    return {
        getID: getID
    };
})();
console.log(app1.getID()); //123

//this
let o = {
    ID: 123,
    getID: function () {
        console.log(this); //{ID; 123, getID: f}
        return this.ID;
    }
};
console.log(o.getID()); //123

//call()
let oC = {
    ID: 123,
    getID: function () {
        return this.ID;
    }
};
let newID1 = { ID: 456 };
console.log(oC.getID.apply(newID1)); //456

//apply()
let oA = {
    ID: 123,
    getID: function (prefix) {
        return prefix + this.ID;
    }
};
let newID2 = { ID: 456 };
console.log(oA.getID.apply(newID2, ['ID: '])); //ID: 456

//bind()

let oB = {
    ID: 123,
    getID: function () {
        return this.ID;
    }
};
let newID3 = { ID: 456 };
let newFn = oB.getID.bind(newID3);
console.log(newFn()); //456
//creates a new copy of function, unlike call & apply

//Arrow Functions
//does not have its own this value
let getID = (pre, suf) => {
    return pre + 123 + suf;
};
console.log(getID('ID: ', '~')); //ID: 123~

let getID1 = (pre, suf) => pre + 123 + suf;
console.log(getID1('ID: ', '~')); //ID: 123~

let getID2 = () => 123;
console.log(getID2()); //123

let getID3 = _ => 123;
console.log(getID3()); //123

//Default Parameters - available in ES6 - 2015 version
let tracker = function (ID, province = 'TO') {
    console.log(`Tracking ${ID} in ${province}.`);
};
console.log(tracker(123)); //Tracking 123 in TO.
console.log(tracker(123, "BC")); //Tracking 123 in BC.
