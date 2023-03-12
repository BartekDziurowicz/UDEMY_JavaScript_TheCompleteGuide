const numbers = [1, 2, 3];
console.log(numbers);

const moreNumbers = new Array(); //empty array
console.log(moreNumbers);

const otherWay = new Array(1, 2); // array with values 1 and 2 etc
console.log(otherWay);

const nextArray = new Array(5); //array with length 5
console.log(otherWay);

const withoutNew = Array(1, 2); //another way for createing array
console.log(nextArray);

const ofArray = Array.of(1, 2);
console.log(ofArray);

const fromArray = Array.from('Hi!'); //takes itarable or array as object, = ['H', 'i', '!']
// can be used for example for objects in DOM
const listItems = document.querySelectorAll('li');
const domArray = Array.from(listItems);
console.log(domArray);

