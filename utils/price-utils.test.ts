import { calculateResaleValue } from "./price-utils";

describe("calculateResaleValue", () => {
  it("should return the correct resale value for 0 years elapsed", () => {
    const price = 5000;
    const purchaseDate = new Date().toISOString();
    const resaleValue = calculateResaleValue(price, purchaseDate);
    expect(resaleValue).toBe(price);
  });

  it("should return the correct resale value for 1 year elapsed", () => {
    const price = 5000;
    const purchaseDate = new Date(
      new Date().setFullYear(new Date().getFullYear() - 1)
    ).toISOString();
    const resaleValue = calculateResaleValue(price, purchaseDate);
    expect(resaleValue).toBe(price / 2);
  });

  it("should return the correct resale value for 2 years elapsed", () => {
    const price = 5000;
    const purchaseDate = new Date(
      new Date().setFullYear(new Date().getFullYear() - 2)
    ).toISOString();
    const resaleValue = calculateResaleValue(price, purchaseDate);
    expect(resaleValue).toBe(price / 4);
  });
});
