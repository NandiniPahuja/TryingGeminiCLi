// Main application file for the calculator app

const readline = require('readline');
const { add, subtract, multiply, divide } = require('./index'); // Assuming index.js contains the functions

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function askQuestion(query) {
    return new Promise(resolve => rl.question(query, resolve));
}

async function runCalculator() {
    console.log("Welcome to the Node.js Calculator App!");
    console.log("Available operations: add, subtract, multiply, divide");
    console.log("Enter 'exit' to quit.");

    while (true) {
        const operation = await askQuestion("Enter operation (add, subtract, multiply, divide) or 'exit': ");
        if (operation.toLowerCase() === 'exit') {
            break;
        }

        if (!['add', 'subtract', 'multiply', 'divide'].includes(operation.toLowerCase())) {
            console.log("Invalid operation. Please try again.");
            continue;
        }

        const num1 = parseFloat(await askQuestion("Enter first number: "));
        const num2 = parseFloat(await askQuestion("Enter second number: "));

        let result;
        try {
            switch (operation.toLowerCase()) {
                case 'add':
                    result = add(num1, num2);
                    break;
                case 'subtract':
                    result = subtract(num1, num2);
                    break;
                case 'multiply':
                    result = multiply(num1, num2);
                    break;
                case 'divide':
                    result = divide(num1, num2);
                    break;
            }
            console.log(`Result: ${result}`);
        } catch (error) {
            console.log(`Error: ${error.message}`);
        }
    }

    rl.close();
    console.log("Calculator app exited. Goodbye!");
}

runCalculator();
