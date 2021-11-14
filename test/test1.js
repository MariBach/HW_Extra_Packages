import { expect } from "chai";
import { calc} from '../calculator.js'
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