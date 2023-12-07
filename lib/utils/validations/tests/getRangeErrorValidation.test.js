import {
  getMaxErrorValidation,
  getMinErrorValidation
} from "../getRangeErrorValidation";

describe("getMinErrorValidation", () => {
  it("returns false if length is more than minLength", () => {
    const minLength = 5;
    const value = "helloooo";
    const validate = getMinErrorValidation(minLength);
    expect(validate(value)).toBe(false);
  });

  it("returns false if length is equal to minLength", () => {
    const minLength = 5;
    const value = "world";
    const validate = getMinErrorValidation(minLength);
    expect(validate(value)).toBe(false);
  });

  it("returns true if length is less than minLength", () => {
    const minLength = 5;
    const value = "tes";
    const validate = getMinErrorValidation(minLength);
    expect(validate(value)).toBe(true);
  });
});

describe("getMaxErrorValidation", () => {
  it("returns true if length is greater than maxLength", () => {
    const maxLength = 8;
    const value = "programming";
    const validate = getMaxErrorValidation(maxLength);
    expect(validate(value)).toBe(true);
  });

  it("returns false if length is equal to maxLength", () => {
    const maxLength = 8;
    const value = "language";
    const validate = getMaxErrorValidation(maxLength);
    expect(validate(value)).toBe(false);
  });

  it("returns false if length is less than maxLength", () => {
    const maxLength = 8;
    const value = "code";
    const validate = getMaxErrorValidation(maxLength);
    expect(validate(value)).toBe(false);
  });
});
