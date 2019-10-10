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

//  >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> Generator Basics / In Action

// A generator looks like a normal function, but a * in the declaration makes it a generator:
function *select() {
    yield 'House';
    yield 'Garage';
}

select(); // Prints nothing, because by running a generaotr, we actually get back an iterator

let it = select();
console.log(it.next());
console.log(it.next());
console.log(it.next());

// --------------

let obj = {
    [Symbol.iterator]: gen
}

function *gen() {
    yield 1;
    yield 2;
}

for (let element of obj) {
    console.log(element);
}

// ---------------

function *reGen(end) {
    for (let i = 0; i < end; i++) {
        try {
            yield i;
        }
        catch (e) {
            console.log(e);
        }
    }
}

let reGenValue = reGen(5);
console.log(reGenValue.next());
console.log(reGenValue.throw('An Error Occurred')); // Allows the iteration to continue
// console.log(reGenValue.return('An Error Occurred')); // Will end the iteration process, done: true
console.log(reGenValue.next());
console.log(reGenValue.next());
console.log(reGenValue.next());
console.log(reGenValue.next());

//  >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> Generator Basics / In Action

//  >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>Custom, Iterable Object

// let person = {
//     name: "Max",
//     hobbies: ['Sports', 'Cooking'],
//     [Symbol.iterator]: function() {
//         let i = 0;
//         let hobbies = this.hobbies;
//         return {
//             next: function() {
//                 let value = hobbies[i];
//                 i++;
//                 return {
//                     done: i > hobbies.length ? true : false,
//                     value: value
//                 }
//             }
//         }
//     }
// };

// for (let hobby of person) {
//     console.log(hobby);
// }

//  >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>Custom, Iterable Object

//  >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>Iterators in Action

// Does not work, might be Node/Express issue?

// let array = [1, 2, 3];

// array[Symbol.iterator] = function() {
//     let nextValue = 10;
//     return {
//         next: function() {
//             nextValue++;
//             return {
//                 done: nextValue > 15 ? true : false,
//                 value: nextValue
//             };
//         }
//     };
// };

// for (let element of array) {
//     console.log(element);
// }
//  >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>Iterators in Action

//  >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>Iterator Basics

// let arr = [1, 2, 3];

// // Built in Symbol on all js arrays
// let it = arr[Symbol.iterator]();

// console.log(it.next());
// console.log(it.next());
// console.log(it.next());
// console.log(it.next());

//  >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>Iterator Basics
