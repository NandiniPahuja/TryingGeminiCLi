const assert = require('assert');
const { add, subtract, multiply, divide } = require('./index');

function runTests() {
    console.log("Running tests...");

    // Test Addition
    assert.strictEqual(add(2, 3), 5, "Test Add 1 Failed: 2 + 3 should be 5");
    assert.strictEqual(add(-1, 1), 0, "Test Add 2 Failed: -1 + 1 should be 0");
    assert.strictEqual(add(0, 0), 0, "Test Add 3 Failed: 0 + 0 should be 0");

    // Test Subtraction
    assert.strictEqual(subtract(5, 2), 3, "Test Subtract 1 Failed: 5 - 2 should be 3");
    assert.strictEqual(subtract(2, 5), -3, "Test Subtract 2 Failed: 2 - 5 should be -3");
    assert.strictEqual(subtract(0, 0), 0, "Test Subtract 3 Failed: 0 - 0 should be 0");

    // Test Multiplication
    assert.strictEqual(multiply(2, 3), 6, "Test Multiply 1 Failed: 2 * 3 should be 6");
    assert.strictEqual(multiply(-1, 5), -5, "Test Multiply 2 Failed: -1 * 5 should be -5");
    assert.strictEqual(multiply(0, 10), 0, "Test Multiply 3 Failed: 0 * 10 should be 0");

    // Test Division
    assert.strictEqual(divide(6, 3), 2, "Test Divide 1 Failed: 6 / 3 should be 2");
    assert.strictEqual(divide(10, 2), 5, "Test Divide 2 Failed: 10 / 2 should be 5");
    assert.strictEqual(divide(5, 2), 2.5, "Test Divide 3 Failed: 5 / 2 should be 2.5");

    // Test Division by Zero
    assert.throws(() => divide(1, 0), Error, "Test Divide by Zero Failed: Should throw an error");

    console.log("All tests passed!");
}

runTests();
