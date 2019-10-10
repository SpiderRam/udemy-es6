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


//  >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> Built-In Methods

let promise1 = new Promise(function(res, rej) {
    setTimeout(() => {
        res('Resolved!');
    }, 1000);
});

let promise2 = new Promise(function(res, rej) {
    setTimeout(() => {
        // rej('Rejected!');
        res('Resolved!!');
    }, 2000);
});

// Promise.all expects an array
// It will wait for all promises in the array to finish
// It will only succeed if all promises in the array succeed, 
// otherwise it throws the error
Promise.all([promise1, promise2])
    .then(function(success) {
        console.log(success)
    })
    .catch(function(error) {
        console.log(error);
    });

// Promise.race waits for just the first one, and mirrors succeed/fail
Promise.race([promise1, promise2])
    .then(function(success) {
        console.log(success)
    })
    .catch(function(error) {
        console.log(error);
    });


//  >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> Built-In Methods

//  >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> Chaining and Catching Errors

// function waitASecond(seconds) {
//     return new Promise(function(res, rej) {
//         if (seconds > 2) {
//             rej('Rejected!');
//         } else {
//             setTimeout(() => {
//                 seconds++;
//                 res(seconds);
//             }, 1000);
//         }
//     });
// };

// waitASecond(0)
//     .then(waitASecond)
//     .then(waitASecond)
//     .then(waitASecond)
//     .then(function(seconds) {
//         console.log(seconds);
//     })
//     .catch(function(error) {
//         console.log(error);
//     });
//  >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> Chaining and Catching Errors

//  >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> Creating, Resolving, & Rejecting

// let promise = new Promise(function(resolve, reject) {
//     setTimeout(function() {
//         reject('Failed!');
//         // resolve('Done!');
//     }, 1500);
// });

// promise.then(function(value) {
//     console.log(value)
// }, function(error) {
//     console.log(error);
// });

//  >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> Creating, Resolving, & Rejecting
