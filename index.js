'use strict';

const prompt = require('prompt-sync')();

 
function getValidNumberInput(promptMessage) {
  let input;
  let number;
  
  while (true) {
    input = prompt(promptMessage);
    number = Number(input);
    
    if (!isNaN(number)) {
      return number;
    }
    
    console.log("Invalid input! Please enter a valid number.");
  }
}

 
function getValidOperatorInput(promptMessage) {
  const validOperators = ['+', '-', '*', '/', '%', '**'];
  let operator;
  
  while (true) {
    operator = prompt(promptMessage);
    
    if (validOperators.includes(operator)) {
      return operator;
    }
    
    console.log("Invalid operator! Please enter one of: +, -, *, /, %, **");
  }
}

 
function add(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

function multiply(a, b) {
  return a * b;
}

function divide(a, b) {
  if (b === 0) {
    return "Error: Division by zero!";
  }
  return a / b;
}

function modulo(a, b) {
  return a % b;
}

function power(a, b) {
  return a ** b;
}

 
function calculator() {
  console.log("=== Interactive Calculator & Data Analyzer ===\n");
  
  while (true) {
 
    const num1 = getValidNumberInput("Enter the first number: ");
    const num2 = getValidNumberInput("Enter the second number: ");
    const operator = getValidOperatorInput("Enter an operator (+, -, *, /, %, **): ");
    
    let result;
    
 
    switch (operator) {
      case '+':
        result = add(num1, num2);
        break;
      case '-':
        result = subtract(num1, num2);
        break;
      case '*':
        result = multiply(num1, num2);
        break;
      case '/':
        result = divide(num1, num2);
        break;
      case '%':
        result = modulo(num1, num2);
        break;
      case '**':
        result = power(num1, num2);
        break;
      default:
        result = "Error: Invalid operator!";
    }
    
 
    console.log(`\nResult: ${result}`);
    
 
    const resultType = typeof result;
    console.log(`Data Type: ${resultType}`);
 
    const displayResult = result ?? "Result is undefined or null, something went wrong!";
    
    if (resultType === 'number') {
    
      if (result > 0) {
        console.log("The result is Positive");
      } else if (result < 0) {
        console.log("The result is Negative");
      } else {
        console.log("The result is Zero");
      }
      
   
      if (Number.isInteger(result)) {
        console.log("The result is an Integer");
      } else {
        console.log("The result is a Floating-point number");
      }
      
  
      const evenOrOdd = result % 2 === 0 ? "Even" : "Odd";
      console.log(`The result is ${evenOrOdd}`);
      
  
      if (result > 0 && result % 2 === 0) {
        console.log("The result is Positive and Even");
      } else if (result > 0 && result % 2 !== 0) {
        console.log("The result is Positive and Odd");
      } else if (result < 0 && result % 2 === 0) {
        console.log("The result is Negative and Even");
      } else if (result < 0 && result % 2 !== 0) {
        console.log("The result is Negative and Odd");
      }
      
    } else if (resultType === 'string') {
     
      console.log(`Error Message: ${result}`);
    } else {
      
      console.log(displayResult);
    }
    
    
    console.log("\n" + "=".repeat(50));
    const continueCalc = prompt("Do you want to perform another calculation? (yes/no): ");
    
    if (continueCalc.toLowerCase() === 'no') {
      console.log("\nThank you for using the calculator! Goodbye!");
      break;
    }
    
    console.log("\n");
  }
}

 
calculator();