const sum = require("./index");

describe("Testing sum fraction", () => {
  it("should add 2 positive numbers", () => {
    expect(sum(1, 2)).toBe(3);
  });
  it("should call sum function without arguments", () => {
    expect(sum()).toBe("sum invoked without arguments");
  });
  it("should add 2 strings", () => {
    expect(sum("1", "2")).toBe(3);
  });
  it("should add 2 floting sumbers", () => {
    expect(sum(2.5, 2.5)).toBe(5);
  });
  it("should call sum function with one arguments", () => {
    expect(sum(1)).toBe("sum function needs atleast 2 arguments");
  });

  it("should add 4 numbers", () => {
    expect(sum(1, 2, 3, 4)).toBe(10);
  });
});
