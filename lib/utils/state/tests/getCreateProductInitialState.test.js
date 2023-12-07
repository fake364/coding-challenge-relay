import getCreateProductInitialState from "../getCreateProductInitialState";

describe(getCreateProductInitialState, () => {
  beforeAll(() => {
    jest.useFakeTimers("modern");

    jest.setSystemTime(new Date(2020, 3, 1));
  });

  it("should create initial state object of create product form", () => {
    expect(getCreateProductInitialState()).toStrictEqual({
      createdAt: "2020-1-4",
      description: "",
      name: "",
      price: 0
    });
  });
});
