// class Person {
//     name = 'Max';

//     constructor() {
//         this.age = 30;
//     }

//     greet() {
//         console.log('Hi, I am ' + this.name + ' and I am ' + this.age + ' year old.');
//     }
// }

function Person() {
    this.age = 30;
    this.name = 'Max';
    this.greet = () => {
        console.log('Hi, I am ' + this.name + ' and I am ' + this.age + ' year old.');
    }
}

Person.prototype = {
    printAge() {
        console.log(this.age);
    }
}

const person = new Person();
person.printAge();