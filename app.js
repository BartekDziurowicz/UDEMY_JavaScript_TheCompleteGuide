// pure function, for the same input we awlays get the same result
// and its not change nothing outside the function

function add(num1, num2) {
    return num1 + num2;
}

// impure function, because always different result
function random() {
    return Math.random();
}

//impure becasue side effect
let n = 0;
function withSideEffect(num1) {
    return num1 + n;
}


// factory function - produce another function
function createTaxCalculator(tax) {
    function calculateTax(amount) {
        return amount*tax;
    }

    return calculateTax; //return pointer to inner function
}

const calculateVatAmount = createTaxCalculator(0.19);
const calculateIncomeTaxAmount = createTaxCalculator(0.25);

console.log(calculateVatAmount(100));
console.log(calculateIncomeTaxAmount(200));