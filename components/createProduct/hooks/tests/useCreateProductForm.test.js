import { renderHook, act } from "@testing-library/react-hooks";
import useCreateProductForm from "../useCreateProductForm";

describe("useCreateProductForm", () => {
  it("should update values and errors on onChange", () => {
    const { result } = renderHook(() => useCreateProductForm());

    act(() => {
      result.current.onChange({
        target: { name: "name", value: "Test Product" }
      });
    });

    expect(result.current.values.name).toBe("Test Product");
    expect(result.current.errors.name).toBe("");
  });

  it("should show errors on showErrors", () => {
    const { result } = renderHook(() => useCreateProductForm());

    act(() => {
      result.current.showErrors();
    });

    expect(result.current.isValidationShown).toBe(true);
  });

  it("should reset form values and hide validation on resetForm", () => {
    const { result } = renderHook(() => useCreateProductForm());

    act(() => {
      result.current.onChange({
        target: { name: "name", value: "Test Product" }
      });
    });

    act(() => {
      result.current.showErrors();
    });

    expect(result.current.values.name).toBe("Test Product");
    expect(result.current.isValidationShown).toBe(true);

    act(() => {
      result.current.resetForm();
    });

    expect(result.current.values.name).toBe("");
    expect(result.current.isValidationShown).toBe(false);
  });

  it("should setup errors for invalid fields", () => {
    const { result } = renderHook(() => useCreateProductForm());

    act(() => {
      result.current.onChange({
        target: {
          name: "name",
          value:
            "TeTeTeTeTeTeTeTeTeTeTeTeTeTeTeTeTeTeTeTeTeTeTeTeTeTeTeTeTeTeTeTeTeTe"
        }
      });
    });
    act(() => {
      result.current.onChange({
        target: { name: "description", value: "des" }
      });
    });
    act(() => {
      result.current.onChange({
        target: { name: "price", value: 0 }
      });
    });
    expect(result.current.errors).toStrictEqual({
      createdAt: "",
      description: "Min length for this field is 10",
      name: "Max length for this field is 20",
      price: "Price shouldn't be below or equal zero"
    });
  });
});
