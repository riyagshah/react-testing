const taxCalculator = require("./tax_calculator");

describe("Testing of tax_calculator", () => {
  it("should return tax", () => {
    expect(taxCalculator(100000, 10000)).toEqual("no tax");
  });

  it("should return tax", () => {
    expect(taxCalculator(250000, 50000)).toEqual("no tax");
  });

  it("should return tax", () => {
    expect(taxCalculator(400000, 70000)).toEqual(11500);
  });

  it("should return tax", () => {
    expect(taxCalculator(500000, 100000)).toEqual(22000);
  });

  it("should return tax", () => {
    expect(taxCalculator(800000, 120000)).toEqual(52800);
  });

  it("should return tax", () => {
    expect(taxCalculator(1000000, 200000)).toEqual(96000);
  });

  it("should return tax", () => {
    expect(taxCalculator(1500000, 300000)).toEqual(141000);
  });
});
