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


// Many built in classes can be extended with subclassing.
// See compatibility here:  https://kangax.github.io/compat-table/es6/
class ConvertableArray extends Array {
    convert() {
        let returnArray = [];
        this.forEach(value => returnArray.push('Converted! ' + value));
        return returnArray;
    }
}

let numberArray = new ConvertableArray();
numberArray.push(1);
numberArray.push(2);
numberArray.push(3);

console.log(numberArray.convert());