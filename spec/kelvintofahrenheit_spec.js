import { kelvinToFahrenheit } from "../kelvintofahrenheit.js";

describe("A suite", function() {
  it("tests 4 kelvin", function() {
    let fahrenheit = kelvinToFahrenheit(4);
    expect(fahrenheit.toFixed(2)).toBe("-452.47");
  });
});
describe("A suite", function() {
  it("tests 6 kelvin", function() {
    let fahrenheit = kelvinToFahrenheit(6);
    expect(fahrenheit.toFixed(2)).toBe("-448.87");
  });
});

  
  