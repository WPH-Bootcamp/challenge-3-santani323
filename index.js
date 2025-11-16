'use strict';

const prompt = require('prompt-sync')();

// Function to get valid number input from user
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

// Function to get valid operator input from user
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

// Arithmetic operation functions
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

// Main calculator logic
function calculator() {
  console.log("=== Interactive Calculator & Data Analyzer ===\n");
  
  while (true) {
    // Get inputs from user
    const num1 = getValidNumberInput("Enter the first number: ");
    const num2 = getValidNumberInput("Enter the second number: ");
    const operator = getValidOperatorInput("Enter an operator (+, -, *, /, %, **): ");
    
    let result;
    
    // Use switch to perform the operation
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
    
    // Display result
    console.log(`\nResult: ${result}`);
    
    // Data type analysis and conditional output
    const resultType = typeof result;
    console.log(`Data Type: ${resultType}`);
    
    // Handle nullish values using Nullish Coalescing Operator
    const displayResult = result ?? "Result is undefined or null, something went wrong!";
    
    if (resultType === 'number') {
      // Check if positive, negative, or zero
      if (result > 0) {
        console.log("The result is Positive");
      } else if (result < 0) {
        console.log("The result is Negative");
      } else {
        console.log("The result is Zero");
      }
      
      // Check if integer or floating-point
      if (Number.isInteger(result)) {
        console.log("The result is an Integer");
      } else {
        console.log("The result is a Floating-point number");
      }
      
      // Check if even or odd using ternary operator
      const evenOrOdd = result % 2 === 0 ? "Even" : "Odd";
      console.log(`The result is ${evenOrOdd}`);
      
      // Complex condition using logical operators
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
      // Handle string results (error messages)
      console.log(`Error Message: ${result}`);
    } else {
      // Handle undefined or null
      console.log(displayResult);
    }
    
    // Ask if user wants to continue
    console.log("\n" + "=".repeat(50));
    const continueCalc = prompt("Do you want to perform another calculation? (yes/no): ");
    
    if (continueCalc.toLowerCase() === 'no') {
      console.log("\nThank you for using the calculator! Goodbye!");
      break;
    }
    
    console.log("\n");
  }
}

// Run the calculator
calculator();