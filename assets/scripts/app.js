const defaultResult = 0;
let currentResult = defaultResult;
let logEntries = [];

const getUserNumberInput = () => {
    return parseInt(userInput.value);
}

const createAndWriteOutput = (operator, resultBeforeCalc, calcNumber) => {
    const calcDescription = `${resultBeforeCalc} ${operator} ${calcNumber}`;
    outputResult(currentResult, calcDescription);
}

const add = () => {
    const enteredNumber = getUserNumberInput();
    const initialResult = currentResult;
    currentResult += enteredNumber;   
    createAndWriteOutput('+', initialResult, enteredNumber);
    const logEntry = {
        operation: 'ADD',
        prevResult: initialResult,
        number: enteredNumber,
        result: currentResult
    };
    logEntries.push(logEntry);
    console.log(logEntry.operation);
    console.log(logEntries);
}

const substract = () => {
    const enteredNumber = getUserNumberInput();
    const initialResult = currentResult;
    currentResult -= enteredNumber;   
    createAndWriteOutput('-', initialResult, enteredNumber);
}

const multiply = () => {
    const enteredNumber = getUserNumberInput();
    const initialResult = currentResult;;
    currentResult *= enteredNumber;   
    createAndWriteOutput('*', initialResult, enteredNumber);
}

const divide = () => {
    const enteredNumber = getUserNumberInput();
    const initialResult = currentResult;
    currentResult /= enteredNumber;   
    createAndWriteOutput('/', initialResult, enteredNumber);
}

addBtn.addEventListener('click', add);
subtractBtn.addEventListener('click', substract);
multiplyBtn.addEventListener('click', multiply);
divideBtn.addEventListener('click', divide);

