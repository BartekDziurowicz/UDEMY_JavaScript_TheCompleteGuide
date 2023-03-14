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



// splice - only on arrays, not all iterables
hobbies.splice(0, 0); // from index 0 delete 0 elemets
hobbies.splice(1, 0, 'new item'); //from index 1 delete 0 elemetns and replace with new element, can be many alements as you wish
hobbies.splice(0); // delete all items from index 0
hobbies.splice(-1, 1); // delete 1 element from index array.lenght-1



// slice
const slicearray = [1, 2, 3];
const slicedarray = slicearray.slice(); // make a copy of array in ne place in memory - different reference
const slicedarray2 = slicearray.slice(1, 2); // make copy of added range from 1 to 2 (not included)

// concat - ad array or arrays to existing array, make a copy not reference old array to new one
const concatedArray = slicearray.concat(hobbies);

// indexOf and lastIndexOf - working with primitive values
const indexof = slicedarray.indexOf(3); // return 2, while number 3 have index 2 in array, first index starting from left
const lastindexof = slicearray.lastIndexOf(3); // first index starting from right

// find() method - working on prymitive and referenced types
const data = [{name: Bartek}, {name: Marian}];
const bartek = data.find( (person, idx, persons) => {
    return person.name === 'Bartek';
} ); //up to 3 arguments (person - single element of array, not required are idx=index and persons - whole array), will stop after first hit from left
// will return real object, not copied

// findIndex - will return index of the object
const maxindex = data.findIndex( (person, idx, persons) => {
    return person.name === 'Bartek';
} );

// included - check if is included
console.log(slicearray.includes(2));



// forEach method - takes up to 3 args
const prices = [4.20, 2.12, 3.98];
const tax = 0.19;
const taxAdjustedPrices = [];

prices.forEach( (price, idx, prices) => {
    taxAdjustedPrices.push(price * (1 + tax));
} );


// transforming data with map()
const prices2 = [4.20, 2.12, 3.98];
const tax2 = 0.19;
const taxAdjustedPrices2 = [];

prices.map( (price, idx, prices) => {
    const priceObj = { index: idx, taxAdjPrice: price * (1 + tax)};
    taxAdjustedPrices2.push(priceObj);
} );

// or
taxAdjusted2 = prices.map( (price, idx, prices) => {
    const priceObj = { index: idx, taxAdjPrice: price * (1 + tax)};
    return priceObj;
} );


// sorted and reverse
const sortedNumbers = hobbies.sort(); // sort converts everything to string, so 10 will be before 3
const sortedNumbers2 = hobbies.sort( (a, b) => {
    if ( a>b ) {
        return 1;
    } else if ( a===b ) {
        return 0
    } else {
        return -1;
    }
}); // fixed logic

const reverseNumbers = sortedNumbers2.reverse(); //reverse order in array

// filtering
const prices3 = [10.99, 5.99, 3.99, 6.59];
const filteredArray = prices3.filter( (price, index, prices) => { // will return new array
    return price > 6;
});

// with shorter arrow func:
const filteredArray2 = prices3.filter( p => p > 6 );



// reduce method - reduce array to simple value
let sum = 0;
prices3.forEach( (price) => {
    sum += price;
} );

const sum2 = prices3.reduce( (prevValue, curValue, curIndex, prices) => {
    return prevValue + curValue;
}, 0); // 0 is initial value because prv is not exist at this moment


// arrays and sstrings - split and join
const someData = 'new york;10.99;2000';
const transformedData = data.split(';'); // will return array with 3 elemets

const nameFramgents = ['Bar', 'tek'];
const name = nameFramgents.join(''); // will return one string from array


// desctructuring
const nameData = ['Bartosz', 'Dziurowicz'];
// const fName = namesData[0];
// const lName = names[1];

const [ fName, lName ] = nameData; // will pull out elemts into variables
