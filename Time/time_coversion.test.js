const timeFunction = require("./time_conversion");

describe("Testing Time function", () => {
  it("should return time in seconds in strings", () => {
    expect(timeFunction(5000)).toEqual("5 seconds");
  });

  it("should return time in minutes & seconds", () => {
    expect(timeFunction(65000)).toEqual("1 minute 5 seconds");
  });

  it("should return time in minutes & seconds", () => {
    expect(timeFunction(3500000)).toEqual("58 minute 20 seconds");
  });

  it("should return time in hours, minutes & seconds", () => {
    expect(timeFunction(4600000)).toEqual("01 hour 16 minutes 40 seconds");
  });
});
