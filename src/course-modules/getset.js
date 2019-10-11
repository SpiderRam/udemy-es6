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

class Person {
    constructor(name) {
        // Using the _ here is an example of Encapsulation, it ensures that 
        // the name property is not accessible from outside and can only be
        // changed by using the get/set methods.  It is not perfect, logging 
        // person._name would have the same effect.
        this._name = name;
    }

    get name() {
        return this._name.toUpperCase();
    }

    set name(value) {
        if (value.length > 2) {
            this._name = value;
        } else {
            console.log('Rejected!');
        }
    }
}

let person = new Person('Max');

console.log(person.name);
person.name = 'Anna';
console.log(person.name);