import createProductResolver from "../createProduct";
import { add, get } from "../../../../../pages/api/products";

jest.mock("../../../../../pages/api/products", () => ({
  add: jest.fn(),
  get: jest.fn(() => [{}])
}));

describe("createProductResolver", () => {
  it("should append incoming product to the end of the product list", () => {
    const response = createProductResolver(undefined, {
      product: {
        createdAt: "12/12/12",
        name: "Name",
        category: "Category",
        price: 123,
        description: "asdsadasdasdasd"
      }
    });
    expect(response).toStrictEqual({
      message: "Created"
    });
    expect(add).toBeCalledWith({
      category: "Category",
      createdAt: "12/12/12",
      description: "asdsadasdasdasd",
      id: 1,
      name: "Name",
      price: 123
    });
    expect(get).toBeCalled();
  });
});
