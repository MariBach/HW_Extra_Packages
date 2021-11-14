import { expect } from "chai";
import { calc} from '../calculator.js'
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