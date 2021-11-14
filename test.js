import { expect } from "chai";
import { calc} from './calculator.js'
describe('Positive scenarios', function() {
  describe('Summ of 10 and 2', function () {
    it('should return 12', function () {
      expect(calc(10, 2, "+")).to.be.equal(12);
    });
  describe('Subtraction of 10 and 2', function () {
    it("should return 8", function () {
      expect(calc(10, 2, "-")).to.be.equal(8);
      });
    });
  });
  describe('Multiplication of 10 and 2', function () {
    it("should return 20", function () {
      expect(calc(10, 2, "*")).to.be.equal(20);
    });
  });
  describe('Division of 10 and 2', function () {
    it("should return 5", function () {
      expect(calc(10, 2, "/")).to.be.equal(5);
    });
  });
});
describe('Negative scenarios', function() {
  describe('Division by zero', function () {
    it('Should return Error', function () {
      expect(calc(10, 0, "/")).to.be.equal("Wrong operation - division by zero");
    });
  describe('Reminder of division 10 and 2', function () {
    it("should return Error", function () {
      expect(calc(10, 2, "%")).to.be.equal('Math operation is not supported');
      });
    });
  });
  describe('Operation with other formats', function () {
    it("should return error", function () {
      expect(calc(10, '$', "*")).to.be.equal("Wrong data format. Please, input a number");
    });
  });
});