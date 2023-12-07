import formatToBrowserDateFormat from "../formatToBrowserDateFormat";

describe(formatToBrowserDateFormat, () => {
  it.each([
    ["12/12/2022", "2022-12-12"],
    ["12/5/2000", "2000-5-12"],
    ["3/5/2010", "2010-5-3"]
  ])("should format date from %s to %s", (input, expected) => {
    expect(formatToBrowserDateFormat(input)).toBe(expected);
  });
});
