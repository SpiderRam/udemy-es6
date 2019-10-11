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

// A Proxy is basically a wrapper for an object, which can 'trap' certain actions


//  >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> Revocable Proxies

let person = {
    name: 'Max'
};

let handler = {
    get: function(target, property) {
        return Reflect.get(target, property);
    }
};

let { proxy, revoke } = Proxy.revocable(person, handler);

console.log(proxy.name); // Max
revoke();
console.log(proxy.name); // Cannot perform 'get' on a proxy that has been revoked

//  >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> Revocable Proxies

//  >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> Wrapping Functions

// function log(message) {
//     console.log(`Log entry created: ${message}`);
// }

// let handler = {
//     apply: function(target, thisArg, argumentsList) {
//         if (argumentsList.length == 1) {
//             return Reflect.apply(target, thisArg, argumentsList);
//         } 
//     }
// };

// let proxy = new Proxy(log, handler);

// proxy('Hello!'); // Hello!
// proxy('Hello!', 10); // Nothing happens, length is > 1

//  >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> Wrapping Functions

//  >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> Proxies as Proxies

// let person = {
//     age: 27,
//     name: 'Max'
// };

// let handler = {
    
// };

// let protoHandler = {
//     get : function(target, name) { // this is a get trap
//         return name in target ? target[name] : 'Does not exist'
//     }
// };

// let proxy = new Proxy({}, handler);

// let protoProxy = new Proxy(proxy, protoHandler);

// Reflect.setPrototypeOf(person, protoProxy);

// console.log(person.name); 
// console.log(person.hobbies);

//  >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> Proxies as Proxies

//  >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> Proxies as Prototypes

// let person = {
//     age: 27,
//     name: 'Max'
// };

// let handler = {
//     get : function(target, name) { // this is a get trap
//         return name in target ? target[name] : 'Does not exist'
//     }
// };

// var proxy = new Proxy({}, handler);

// Reflect.setPrototypeOf(person, proxy);

// console.log(person.name); 

//  >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> Proxies as Prototypes

//  >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> Proxies and Reflect

// let person = {
//     age: 27,
//     name: 'Max'
// };

// let handler = {
//     get : function(target, name) { // this is a get trap
//         return name in target ? target[name] : 'Does not exist'
//     },
//     set: function(target, property, value) {
//         if (value.length >= 2) {
//             return Reflect.set(target, property, value);
//         } else {
//             return "Nope!"
//         }
//     }
// }

// var proxy = new Proxy(person, handler);

// console.log(proxy.name); // Max
// proxy.name = 'M';
// console.log(proxy.name); // Max
// proxy.name = 'Maximilian';
// console.log(proxy.name); // Maximilian

//  >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> Proxies and Reflect

//  >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> Traps

// let person = {
//     age: 27
// };

// let handler = {
//     get : function(target, name) { // this is a get trap
//         return name in target ? target[name] : 'Does not exist'
//     }
// }

// var proxy = new Proxy(person, handler);

// console.log(proxy.age); // 27
// console.log(proxy.hobbies); // Does not exist

//  >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> Traps