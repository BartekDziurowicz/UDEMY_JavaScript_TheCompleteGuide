const defaultResult = 0;
let currentResult = defaultResult;

const getUserNumberInput = () => {
    return parseInt(userInput.value);
}

const add = () => {
    const enteredNumber = getUserNumberInput();
    const calcDescription = `${currentResult} + ${enteredNumber}`;
    currentResult += enteredNumber;   
    outputResult(currentResult, calcDescription);
}

const substract = () => {
    const enteredNumber = getUserNumberInput();
    const calcDescription = `${currentResult} - ${enteredNumber}`;
    currentResult -= enteredNumber;   
    outputResult(currentResult, calcDescription);
}

const multiply = () => {
    const enteredNumber = getUserNumberInput();
    const calcDescription = `${currentResult} * ${enteredNumber}`;
    currentResult *= enteredNumber;   
    outputResult(currentResult, calcDescription);
}

const divide = () => {
    const enteredNumber = getUserNumberInput();
    const calcDescription = `${currentResult} / ${enteredNumber}`;
    currentResult /= enteredNumber;   
    outputResult(currentResult, calcDescription);
}

addBtn.addEventListener('click', add);
subtractBtn.addEventListener('click', substract);
multiplyBtn.addEventListener('click', multiply);
divideBtn.addEventListener('click', divide);

