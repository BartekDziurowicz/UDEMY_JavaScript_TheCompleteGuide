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