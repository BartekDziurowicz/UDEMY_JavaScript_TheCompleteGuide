// Library land
const uid = Symbol('uid');
console.log(uid);

const person = {
    [uid]: 'p1',
    name: 'Bart',
    age: 30,
    [Symbol.toStringTag]: 'User uid'
};

// app land -> using the Library
user.id = 'p2'; // this should be not possible

console.log(user);


// iterators
const company = {
    employees: ['Max', 'Manu', 'Anna'],
    next() {
        if (this.curEmployee >= this.employees.length) {
            return { value: this.curEmployee, done: true };
        }
        const returnValue =  { value: this.employees[this.curEmployee], done: false };
        this.curEmployee++;
        return returnValue;
    }
}

