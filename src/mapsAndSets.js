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


//  >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> The WeakSet

// let set = new WeakSet([1, 1, 1]); // throws an error because the WeakSet can only store objects as values
// set.add(2);

// for (let element of set) {
//     console.log(`set: ${element}`); // would throw an error even with objects because WeakSets are not enumerable
// }

let set1 = new WeakSet([{a: 1}, {b: 2}, {b: 2}]);

console.log(set1.has({b: 2})); // logs false because since objects are reference types, the values at index of set1 are actually different values, and even the {b: 2} here is a new object

let obj1 = {a: 1};
let obj2 = {b: 2}
let set2 = new WeakSet([obj1, obj2, obj2]);

console.log(set2.has(obj2)); // logs true because obj2 is declared once but referenced three times

set2.delete(obj2);
console.log(set2.has(obj2)); // logs false, still only looks at unique values

//  >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> The WeakSet

//  >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> Looping through Sets

// let set = new Set([1, 1, 1]);
// set.add(2);

// for (let element of set.entries()) {
//     console.log(`set: ${element}`); // logs [1, 1] [2, 2] because the key is always the value
// }

//  >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> Looping through Sets

//  >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> Sets -- Creation & Adding

// Sets are kind of like arrays, except that it stores unique values, so each value can only appear once

// let set = new Set([1, 1, 1]);

// for (let element of set) {
//     console.log(`set: ${element}`); // logs 1, because each value can only appear once
// }

// let set2 = new Set([1, 1, 1]);
// set2.add(2);

// for (let element of set2) {
//     console.log(`set2: ${element}`); // logs 1 2, because each value can only appear once
// }

// let set3 = new Set([1, 1, 1, 2]);
// set3.delete(1);

// for (let element of set3) {
//     console.log(`set3: ${element}`); // logs 2, because deleting one instance of a value will remove them all
// }

// let set4 = new Set([1, 1, 1, 2]);
// set4.add(2);
// set4.clear();

// for (let element of set4) {
//     console.log(`set4: ${element}`); // logs nothing
// }

// let set5 = new Set([1, 1, 1]);
// set5.add(2);
// // set5.get(1); // errors, this is not a valid method
// console.log(set.has(1)); // true

// for (let element of set5) {
//     console.log(`set5: ${element}`); // logs nothing
// }

//  >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> Sets -- Creation & Adding

//  >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> The WeakMap

// In a WeakMap, your key may only be a JavaScript object, it cannot be a primitive.
// It is called 'weak' because it holds weak references to the entries in the map,
// meaning that it can get rid of entries if they are no longer used in code-- garbage collection.
// It is not enumerable and can't be looped through, but getters may be used.

// let cardAce = {
//     name: 'Ace of Spades'
// };
// let cardKing = {
//     name: 'King of Clubs'
// };

// // let errorDeck = new WeakMap();
// // errorDeck.set('as', cardAce); // Errors because string is a primitive
// // errorDeck.set('kc', cardKing); // Errors because string is a primitive 

// let key1 = {a : 1};
// let key2 = {b : 2};

// let deck = new WeakMap();
// deck.set(key1, cardAce); 
// deck.set(key2, cardKing); 

// console.log(deck.get(key1));

//  >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> The WeakMap

//  >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> Looping through Maps

// let cardAce = {
//     name: 'Ace of Spades'
// };
// let cardKing = {
//     name: 'King of Clubs'
// };

// let deck = new Map();
// deck.set('as', cardAce);
// deck.set('kc', cardKing);

// for (let key of deck.keys()) {
//     console.log(key);
// }

// for (let value of deck.values()) {
//     console.log(value);
// }

// for (let entry of deck) { 
//     console.log(entry);
// }

// for (let entry of deck.entries()) { // Obsolete, (let entry of deck) returns the same values
//     console.log(entry);
// }

//  >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> Looping through Maps

//  >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> Map Basics

// let cardAce = {
//     name: 'Ace of Spades'
// };
// let cardKing = {
//     name: 'King of Clubs'
// };

// let deck = new Map();
// deck.set('as', cardAce);
// deck.set('kc', cardKing);

// console.log(deck.size);  // 2
// console.log(deck);
// // returns:  Map {
// //     'as' => { name: 'Ace of Spades' },
// //     'kc' => { name: 'King of Clubs' } 
// // }

// console.log(deck.get('as')); // { name: 'Ace of Spades' }
// console.log(deck.size); // should return the same as above, setting overwrites identical keys

// deck.delete('as');
// console.log(deck.get('as')); // undefined, since we deleted it

// deck.clear();
// console.log(deck.size); // now 0, since we deleted the contents

//  >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> Map Basics
