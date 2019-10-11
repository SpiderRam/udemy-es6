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

//  >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>Well-Known Symbols

let numbers = [1, 2, 3];
console.log(numbers + 1);

numbers[Symbol.toPrimitive] = function() {
    return 999;
}

console.log(numbers + 1);

//  >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>Well-Known Symbols

//  >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>Advantages of unique IDs/Symbols
// let symbol = Symbol.for('age');

// let person = {
//     name: 'Max',
//     age: 30
// }

// function makeAge(person) {
//     let ageSymbol = Symbol.for('age');
//     person[ageSymbol] = 27;
// }

// makeAge(person);
// console.log(person[symbol]); // 27
// console.log(person.age); // 30
//  >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>Advantages of unique IDs/Symbols

//  >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>Shared Symbols
// let symbol1 = Symbol.for('age');
// let symbol2 = Symbol.for('age');

// console.log(symbol1 == symbol2);

// let person = {
//     name: 'Max'
// }

// function makeAge(person) {
//     let ageSymbol = Symbol.for('age');
//     person[ageSymbol] = 27;
// }

// makeAge(person);
// console.log(person); // { name: 'Max', [Symbol(age)]: 27 }
// // console.log(person[symbol]); // throws error, undefined
// console.log(person.age); // undefined
//  >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>Shared Symbols


//  >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>Symbols Basics

// Symbols are a new primitive type which provide a unique identifier.
// Symbols are not iterable

// Notice it does not use 'new' keyword

// let symbol = Symbol('debug');
// let anotherSymbol = Symbol('debug');

// console.log(typeof symbol); // symbol
// console.log(symbol.toString()); // Symbol(debug)

// console.log(symbol == anotherSymbol); // false, because these represent unique IDs.

// let obj = {
//     name: 'Max',
//     [symbol]: 22
// }

// console.log(obj);
// console.log(obj[symbol]);
//  >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>Symbols Basics
