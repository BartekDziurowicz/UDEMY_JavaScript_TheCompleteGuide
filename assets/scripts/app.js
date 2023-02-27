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

const writeToLog = (operationIdentifier, prevResult, operationNumber, newResult) => {
    const logEntry = {
        operation: operationIdentifier,
        prevResult: prevResult,
        number: operationNumber,
        result: newResult
    };
    logEntries.push(logEntry);
    console.log(logEntries);
}

const calculateResult = (calculationType) => {
    const enteredNumber = getUserNumberInput();
    const initialResult = currentResult;
    let mathOperator;
    if (calculationType === 'ADD') {
        currentResult += enteredNumber;
        mathOperator = '+';
    } else {
        currentResult -= enteredNumber;
        mathOperator = '-';
    }
    currentResult += enteredNumber;   
    createAndWriteOutput(mathOperator, initialResult, enteredNumber);
    writeToLog(calculationType, initialResult, enteredNumber, currentResult);
}

const add = () => {
    calculateResult('ADD');
}

const subtract = () => {
    calculateResult('SUBTRACT');
}

const multiply = () => {
    const enteredNumber = getUserNumberInput();
    const initialResult = currentResult;;
    currentResult *= enteredNumber;   
    createAndWriteOutput('*', initialResult, enteredNumber);
    writeToLog('MULTIPLY', initialResult, enteredNumber, currentResult);
}

const divide = () => {
    const enteredNumber = getUserNumberInput();
    const initialResult = currentResult;
    currentResult /= enteredNumber;   
    createAndWriteOutput('/', initialResult, enteredNumber);
    writeToLog('DIVIDE', initialResult, enteredNumber, currentResult);
}

addBtn.addEventListener('click', add);
subtractBtn.addEventListener('click', subtract);
multiplyBtn.addEventListener('click', multiply);
divideBtn.addEventListener('click', divide);

