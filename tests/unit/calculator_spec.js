var Calculator = require("../../public/js/calculator.js");
var assert = require("assert");

describe("calculator", function() {
  beforeEach(function() {
    calculator = new Calculator();
  });

  it("it should add the numbers", function() {
    calculator.previousTotal = 1;
    calculator.add(4);
    assert.equal(calculator.runningTotal, 5);
  });

  it("it should subtract the numbers", function() {
    calculator.previousTotal = 7;
    calculator.subtract(4);
    assert.equal(calculator.runningTotal, 3);
  });

  it("it should multiply the numbers", function() {
    calculator.previousTotal = 3;
    calculator.multiply(5);
    assert.equal(calculator.runningTotal, 15);
  });

  it("it should divide the numbers", function() {
    calculator.previousTotal = 21;
    calculator.divide(7);
    assert.equal(calculator.runningTotal, 3);
  });
});
