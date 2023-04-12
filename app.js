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

