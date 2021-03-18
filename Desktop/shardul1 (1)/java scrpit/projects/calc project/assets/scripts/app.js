const defaultResult = 0;
let currentResult = defaultResult;
let logEntries = [];

// Gets input from input field
function getUserNumberInput() {
  return parseInt(usrInput.value);
}

// Generates and writes calculation log
function createAndWriteOutput(operator, resultBeforeCalc, calcNumber) {
  const calcDescription = `${resultBeforeCalc} ${operator} ${calcNumber}`;
  outputResult(currentResult, calcDescription); // from vendor file
}

function writeToLog(
  operationIdentifier,
  prevResult,
  operationNumber,
  newResult
) {
  const logEntry = {
    operation: operationIdentifier,
    prevResult: prevResult,
    number: operationNumber,
    result: newResult
  };
  logEntries.push(logEntry);
  console.log(logEntries);
}

function calculationResult(calctype){
  const enteredNumber = getUserNumberInput();
  if (
    calctype !== "ADD" && 
    calctype !== "subtract"&&
    calctype !== "multiply"&&
    calctype !== "divide"  ||
    !enteredNumber
      
  )
  {
    return ;
  }
    
  
  const initialResult = currentResult;
  let mathOprator;
  if (calctype === "ADD"){
    currentResult += enteredNumber;
    mathOprator='+';
  }else if (calctype==="subtract"){
    currentResult -= enteredNumber;
    mathOprator ='-';
}
else if (calctype==="multiply"){
currentResult *= enteredNumber;
mathOprator ="*";
}
else if(calctype==="divide") {
  currentResult /= enteredNumber;
  mathOprator="/";
}

 
  createAndWriteOutput(mathOprator, initialResult, enteredNumber);
  writeToLog(calctype, initialResult, enteredNumber, currentResult);
}
function add() {
  calculationResult('ADD');
}

function subtract() {
  calculationResult('subtract');
}

function multiply() {
  calculationResult('multiply');
}

function divide() {
  calculationResult('divide')
}

addBtn.addEventListener('click', add);
subtractBtn.addEventListener('click', subtract);
multiplyBtn.addEventListener('click', multiply);
divideBtn.addEventListener('click', divide);
