import getInitialErrorObject from "../getInitialErrorObject";

describe("getInitialErrorObject", () => {
  it("should create initial error object with empty strings for any object", () => {
    expect(
      getInitialErrorObject({ field1: 3, field5: "Test", field10: {} })
    ).toStrictEqual({
      field1: "",
      field10: "",
      field5: ""
    });
  });
});
