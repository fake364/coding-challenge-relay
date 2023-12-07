import { renderHook } from "@testing-library/react-hooks";
import { graphql, useMutation } from "react-relay";
import useCreateProduct from "../useCreateProduct";
import { act } from "@testing-library/react";

jest.mock("react-relay", () => ({
  graphql: jest.fn(),
  useMutation: jest.fn()
}));

describe("useCreateProduct", () => {
  it("should call commitMutation with correct variables", async () => {
    const spy = jest.fn();
    useMutation.mockImplementation(() => [spy, false]);
    const { result } = renderHook(() => useCreateProduct());

    act(() => {
      result.current.createProduct({ param1: "test", param2: "test2" });
    });

    expect(spy).toHaveBeenCalledWith({
      variables: { input: { param1: "test", param2: "test2" } }
    });
  });
});
