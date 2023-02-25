const defaultResult = 0;
let currentResult = defaultResult;

const getUserNumberInput = () => {
    return parseInt(userInput.value);
}

const add = () => {
    const enteredNumber = getUserNumberInput();
    const calcDescription = `${currentResult} + ${enteredNumber}`;
    currentResult = currentResult + enteredNumber;   
    outputResult(currentResult, calcDescription);
}

addBtn.addEventListener('click', add);
