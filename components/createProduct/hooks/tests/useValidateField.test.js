import useValidateField from "../useValidateField";
import { renderHook, act } from "@testing-library/react-hooks";

describe("useValidateField", () => {
  it("sets error message for mandatory field when value is empty", () => {
    const spy = jest.fn();
    act(() =>
      renderHook(() => useValidateField("", spy, { checkMandatory: true }))
    );

    expect(spy).toBeCalledWith("This is mandatory field");
  });

  it("sets error message for min length validation", () => {
    const spy = jest.fn();

    act(() =>
      renderHook(() => useValidateField("short", spy, { minLength: 8 }))
    );

    expect(spy).toBeCalledWith("Min length for this field is 8");
  });

  it("sets error message for max length validation", () => {
    const spy = jest.fn();

    act(() =>
      renderHook(() =>
        useValidateField("this is a very long value", spy, {
          maxLength: 10
        })
      )
    );

    expect(spy).toBeCalledWith("Max length for this field is 10");
  });

  it("does not set an error message when validation passes", () => {
    const spy = jest.fn();

    act(() => renderHook(() => useValidateField("validValue", spy, {})));

    expect(spy).toBeCalledWith("");
  });
});
