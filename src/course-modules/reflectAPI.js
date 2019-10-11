// The reflect API has to do with meta programming, which means it gives us tools to evaluate our code at runtime
// Advantage 1: it bundles some of the static methods built in to JavaScript into one API
// Advantage 2: it adds some new funstionality
// Advantage 3: works well with the Proxy API


//  >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> Preventing Object Extensions

class Person {
    constructor(name, age) {
        this._name = name;
        this.age = age;
    }

    get name() {
        return this._name;
    }

    set name(value) {
        this._name = value;
    }
}

let person = new Person('Max', 27);

console.log(Reflect.isExtensible(person));
Reflect.preventExtensions(person); // Now Reflect.defineProperty will not work
console.log(Reflect.isExtensible(person));

Reflect.defineProperty(person, 'hobbies', {
    value: ['Reading', 'Gardening'],
});

console.log(person.hobbies);

//  >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> Preventing Object Extensions

//  >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> Creating & Deleting Properties

// class Person {
//     constructor(name, age) {
//         this._name = name;
//         this.age = age;
//     }

//     get name() {
//         return this._name;
//     }

//     set name(value) {
//         this._name = value;
//     }
// }

// let mum = {
//     _name: 'Mum'
// };

// let person = new Person('Max', 27);

// Reflect.defineProperty(person, 'hobbies', {
//     writable: true, // false by default, meaning it cannot be changed once created
//     value: ['Reading', 'Gardening'],
//     configurable: true // false by default, meaning none of this can be changed once created
// });

// console.log(person.hobbies);

// // instead of delete person.age:
// Reflect.deleteProperty(person, 'age');
// console.log(person.age);

//  >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> Creating & Deleting Properties

//  >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> Accessing Properties

// class Person {
//     constructor(name, age) {
//         this.name = name;
//         this.age = age;
//     }
// }

// let person = new Person('Max', 27);
// console.log(Reflect.get(person, 'name'));
// // This is the same as person.name, and in a simple app like this is unnecessary, 
// // but in situations where these arguments are dynamic, the Reflect API offers a good solution
// // This would still work even if there was a getter for name (return this._name)

// Reflect.set(person, 'name', 'Anna');
// console.log(Reflect.get(person, 'name'));

// console.log(Reflect.ownKeys(person)); // returns ['name', 'age']

//  >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> Accessing Properties

//  >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> construct(), apply(), and Prototypes interaction

// class Person {
//     constructor() {
//         this.name = 'Max';
//     }
// };

// let person = new Person();

// Person.prototype.age = 27;

// let proto = {
//     age: 30,
//     greet() {
//         console.log(`Hello!`);
//     }
// };
// Reflect.setPrototypeOf(person, proto);
// Reflect.apply(person.greet, person, []);

//  >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> construct(), apply(), and Prototypes interaction

//  >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> Reflect and Prototypes

// class Person {
//     constructor() {
//         this.name = 'Max';
//     }
// };

// let person = new Person();
// console.log(Reflect.getPrototypeOf(person));  // Person {}

// Person.prototype.age = 27;
// console.log(Reflect.getPrototypeOf(person)); // Person { age: 27 }

// let proto = {
//     age: 30
// };
// Reflect.setPrototypeOf(person, proto);
// console.log(Reflect.getPrototypeOf(person)); // { age: 30 }

//  >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> Reflect and Prototypes

//  >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> Reflect.apply()

// class Person {
//     constructor(name, age) {
//         this.name = name;
//         this.age = age;
//     }

//     greet(prefix) {
//         console.log(`${prefix}Hello, I am ${this.name}.`);
//     }
// };

// let person = Reflect.construct(Person, ['Max', 27]);
// Reflect.apply(person.greet, person, []); // the second argument defines which object keyword this will bind to, the third is for arguments you want to pass
// Reflect.apply(person.greet, {name: 'Anna'}, ['...']); 

//  >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> Reflect.apply()

//  >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> Reflect.construct()

// class Person {
//     constructor(name) {
//         this.name = name;
//     }
// }

// let person = Reflect.construct(Person, ['Max']);
// console.log(person);
// console.log(person instanceof Person);

//  >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> Reflect.construct()
