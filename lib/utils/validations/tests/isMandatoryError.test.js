import isMandatoryError from "../isMandatoryError";

describe("isMandatoryError", () => {
  it("returns true if value is empty", () => {
    const value = "";
    expect(isMandatoryError(value)).toBe(true);
  });

  it("returns true if value is only whitespace", () => {
    const value = "     ";
    expect(isMandatoryError(value)).toBe(true);
  });

  it("returns false if value contains non-whitespace characters", () => {
    const value = "non-empty";
    expect(isMandatoryError(value)).toBe(false);
  });

  it("returns false if value contains whitespace characters along with non-whitespace characters", () => {
    const value = "   not-empty   ";
    expect(isMandatoryError(value)).toBe(false);
  });
});
