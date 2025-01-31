import { convertWindToDescription } from "../windtodescription.js";

describe("A suite", function() {
    it("tests windspeed of 10", function() {
      let description = convertWindToDescription(10);
      expect(description).toBe("Light breeze");
    });
    it("tests windspeed of 105", function() {
      let description = convertWindToDescription(105);
      expect(description).toBe("Violent storm");
    });
  });
  
  