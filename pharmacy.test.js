import { Dafalgan, Drug, Fervex, HerbalTea, Pharmacy } from "./pharmacy";

describe("Pharmacy", () => {
  it("should decrease the benefit and expiresIn", () => {
    expect(new Pharmacy([new Drug("test", 2, 3)]).updateBenefitValue()).toEqual(
      [new Drug("test", 1, 2)]
    );
  });
  it("should not have negative benefit", () => {
    expect(new Pharmacy([new Drug("test", 1, 0)]).updateBenefitValue()).toEqual(
      [new Drug("test", 0, 0)]
    );
  });
  it("should not have negative benefit Dafalgan", () => {
    expect(new Pharmacy([new Dafalgan("test", 1, 0)]).updateBenefitValue()).toEqual(
      [new Dafalgan("test", 0, 0)]
    );
  });
  it("Magic Pill should not change benefit and expiresIn", () => {
    expect(new Pharmacy([new Drug("Magic Pill", 1, 1)]).updateBenefitValue()).toEqual(
      [new Drug("Magic Pill", 1, 1)]
    );
  });
  it("should benefit twice after expiration Herbal Tea", () => {
    expect(new Pharmacy([new HerbalTea("test", -1, 1)]).updateBenefitValue()).toEqual(
      [new HerbalTea("test", -2, 3)]
    );
  });
  it("should benefit twice 10 days or less Fervex", () => {
    expect(new Pharmacy([new Fervex("test", 7, 1)]).updateBenefitValue()).toEqual(
      [new Fervex("test", 6, 3)]
    );
  });
  it("should benefit by three 5 days or less Fervex", () => {
    expect(new Pharmacy([new Fervex("test", 5, 1)]).updateBenefitValue()).toEqual(
      [new Fervex("test", 4, 4)]
    );
  });
  it("should drop benefit at 0 after expiration Fervex", () => {
    expect(new Pharmacy([new Fervex("test", 0, 20)]).updateBenefitValue()).toEqual(
      [new Fervex("test", -1, 0)]
    );
  });
});
