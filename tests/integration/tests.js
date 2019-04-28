var chai = require("chai");
var chaiAsPromised = require("chai-as-promised");
chai.use(chaiAsPromised);
var expect = chai.expect;

describe("calculator functionality", function() {
  beforeEach(function() {
    browser.ignoreSynchronization = true;
    browser.get("http://localhost:3000");
  });

  it("should have working number buttons", function() {
    running_total = element(by.css("#running_total"));
    element(by.css("#number2")).click();
    expect(running_total.getAttribute("value")).to.eventually.equal("2");
  });

  it("should concatenate multiple numbers", function() {
    running_total = element(by.css("#running_total"));
    element(by.css("#number2")).click();
    element(by.css("#number9")).click();

    expect(running_total.getAttribute("value")).to.eventually.equal("29");
  });

  it("should show new total when operator button pressed", function() {
    running_total = element(by.css("#running_total"));
    element(by.css("#number2")).click();
    element(by.css("#operator_add")).click();
    element(by.css("#number2")).click();
    element(by.css("#operator_add")).click();
    expect(running_total.getAttribute("value")).to.eventually.equal("4");
  });

  it("should chain multiple operations", function() {
    running_total = element(by.css("#running_total"));
    element(by.css("#number2")).click();
    element(by.css("#operator_add")).click();
    element(by.css("#number2")).click();
    element(by.css("#operator_add")).click();
    element(by.css("#number2")).click();
    element(by.css("#operator_equals")).click();
    expect(running_total.getAttribute("value")).to.eventually.equal("6");
  });

  it("should clear the running total", function() {
    running_total = element(by.css("#running_total"));
    element(by.css("#number2")).click();
    element(by.css("#operator_add")).click();
    element(by.css("#number3")).click();
    element(by.css("#clear")).click();
    element(by.css("#number9")).click();
    element(by.css("#operator_equals")).click();
    expect(running_total.getAttribute("value")).to.eventually.equal("11");
  });

  it("should handle negative numbers", function() {
    running_total = element(by.css("#running_total"));
    element(by.css("#number1")).click();
    element(by.css("#operator_subtract")).click();
    element(by.css("#number9")).click();
    element(by.css("#operator_equals")).click();
    expect(running_total.getAttribute("value")).to.eventually.equal("-8");
  });

  it("should handle decimal numbers", function() {
    running_total = element(by.css("#running_total"));
    element(by.css("#number1")).click();
    element(by.css("#operator_divide")).click();
    element(by.css("#number2")).click();
    element(by.css("#operator_equals")).click();
    expect(running_total.getAttribute("value")).to.eventually.equal("0.5");
  });

  it("should handle large numbers", function() {
    running_total = element(by.css("#running_total"));
    element(by.css("#number1")).click();
    element(by.css("#number0")).click();
    element(by.css("#number0")).click();
    element(by.css("#number0")).click();
    element(by.css("#number0")).click();
    element(by.css("#operator_multiply")).click();
    element(by.css("#number1")).click();
    element(by.css("#number0")).click();
    element(by.css("#number0")).click();
    element(by.css("#number0")).click();
    element(by.css("#number0")).click();
    element(by.css("#operator_equals")).click();

    expect(running_total.getAttribute("value")).to.eventually.equal(
      "100000000"
    );
  });

  it("should be able to divide by zero", function() {
    running_total = element(by.css("#running_total"));
    element(by.css("#number1")).click();
    element(by.css("#operator_divide")).click();
    element(by.css("#number0")).click();
    element(by.css("#operator_equals")).click();
    expect(running_total.getAttribute("value")).to.eventually.equal("Infinity");
  });
});
