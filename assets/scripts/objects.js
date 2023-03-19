const person = {
    name: 'Max',
    age: 30,
    hobbies: ['Sports', 'Cooking'],
    greet: function() {
        alert('Hi there!');
    }
};

// modyfing property
person.name = 'Tim';

// adding property to object
person.isAdmin = true;

// remove property from object
delete person.age;