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



// manage arrays and data
const hobbies = ['sport', 'history'];
hobbies.push('reading'); //add element at the end
hobbies.unshift('cooking'); //add element at first place
hobbies.pop(); //remove last element
hobbies.shift(); //remove first element

hobbies[1] = 'new item'; //repalce element at index 1
hobbies[18] = 'item18'; //add element at index 18 and empty (undefined) indexes between array.length and 18

