import express from 'express';
import path from 'path';
import cookieParser from 'cookie-parser';
import logger from 'morgan';
import indexRouter from './routes/index';
const app = express();
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, '../public')));
app.use('/', indexRouter);
export default app;


//  >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> Arrays

let arr = Array(5); // ES5 syntax, returns [undefined, undefined, undefined, undefined, undefined]
let es6Arr = Array.of(5, 10, 11); // ES6 syntax, returns [5, 10, 11]
console.log(es6Arr);

let array = [10, 12, 16];
console.log(array);

let newArray = Array.from(array, val => val * 2); // [ 20, 24, 32 ]
console.log(newArray);

console.log(array.find(val => {
    return val >= 12; // Only returns the first it finds that is true, so will return 12 here
}))

array.fill(100);
console.log(array);

let petArray = ['cat', 'parakeet', 'boa', 'gerbil', 'sugar glider', 'chinchilla', 'goldfish'];
console.log(petArray.fill('dog', 1, 6)); // You can specify start and end indices

let inventory = [
    {name: 'apples', quantity: 2},
    {name: 'bananas', quantity: 0},
    {name: 'cherries', quantity: 5}
];
function findCherries(fruit) {
    return fruit.name === 'cherries';
};
console.log(inventory.find(findCherries));

let arrayToCopyWithin = [1, 2, 3];
console.log(arrayToCopyWithin.copyWithin(1, 2)); // [1, 3, 3] (index 2 was copied to replace index 1)
console.log(arrayToCopyWithin); // [1, 3, 3] .copyWithin does mutate the original array
console.log(arrayToCopyWithin.copyWithin(1, 0, 2)); // [1, 1, 3] (indices 0-2 are copied to replaces indices starting at 1, and overflow is trimmed off so length does not change)

let entryArray = ['a', 'b', 'c', 'd', 'e'];
let iterate = entryArray.entries();

for (let element of iterate) {
    console.log(element); // will return an array [index, value], i.e. [0, 'a']
}

//  >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> Arrays

//  >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> String & Number Object

// let name = 'Maximilian';

// console.log(name.startsWith('Maxx'));
// console.log(name.endsWith('an'));
// console.log(name.endsWith('An'));
// console.log(name.includes('Maxim'));

// let num1 = NaN;
// let num2 = 'NaN';
// let num3 = Infinity;
// let num4 = 10;
// console.log(isNaN(num1), isNaN(num2));
// console.log(isFinite(num3), isFinite(num4));
// console.log(Number.isInteger(num3), Number.isInteger(num4));

//  >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> String & Number Object

//  >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> Math Object

// let n1 = -10;
// let n2 = 0;
// let n3 = NaN;
// let n4 = 'a string';
// console.log(Math.sign(n1));
// console.log(Math.sign(n2));
// console.log(Math.sign(n3));
// console.log(Math.sign(n4));

// let n5 = 3.78;
// let n6 = -3.78;
// console.log(Math.trunc(n5));
// console.log(Math.trunc(n6), Math.floor(n6));

//  >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> Math Object

//  >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> Object Basics

// Built-in method, returns { a: 1, b: 2 }
// var obj1 = {
//     a: 1
// };

// var obj2 = {
//     b: 2
// };

// var obj = Object.assign(obj1, obj2);
// console.log(obj);

// class Obj1 {
//     constructor() {
//         this.a = 1;
//     }
// }

// class Obj2 {
//     constructor() {
//         this.b = 2;
//     }
// }

// var obj1 = new Obj1();
// var obj2 = new Obj2();

// var obj = Object.assign(obj1, obj2); // returns Obj1 { a: 1, b: 2 }
// // var obj = Object.assign(obj2, obj1); // returns Obj2 { b: 2, a: 1 }
// // var obj = Object.assign({}, obj2, obj1); // obj.__proto__ === Object.prototype will evaluate to true
// console.log(obj);

// let person = {
//     // name: 'Max'
// };

// let boss = {
//     name: 'Anna'
// };

// console.log(person.__proto__ === Object.prototype);

// Object.setPrototypeOf(person, boss);

// console.log(person.__proto__ === Object.prototype);
// console.log(person.__proto__ === boss);
// console.log(person.name);

//  >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> Object Basics
