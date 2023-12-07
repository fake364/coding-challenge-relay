import React from "react";
import {
  render,
  screen,
  fireEvent,
  logRoles,
  act
} from "@testing-library/react";
import InputFields from "../InputFields";
import userEvent from "@testing-library/user-event";

describe("InputFields", () => {
  const mockOnChange = jest.fn();

  const defaultValues = {
    name: "",
    price: "",
    description: "",
    createdAt: ""
  };

  const defaultErrors = {
    name: false,
    price: false,
    description: false,
    createdAt: false
  };

  it("renders InputFields component with default values and no errors", () => {
    render(
      <InputFields
        onChange={mockOnChange}
        values={defaultValues}
        errors={defaultErrors}
        isValidationShown={false}
      />
    );

    // Check if all input fields are rendered
    expect(screen.getByTestId("name-input")).toBeInTheDocument();
    expect(screen.getByTestId("price-input")).toBeInTheDocument();

    expect(screen.getByTestId("description-input")).toBeInTheDocument();
    expect(screen.getByTestId("createdat-input")).toBeInTheDocument();

    // Check if helper text is not displayed
    expect(screen.queryByText(/error/i)).toBeNull();
  });

  it("displays error messages when validation is shown", () => {
    const errorValues = {
      name: "Name is required",
      price: "Invalid price",
      description: "Description is too short"
    };

    const { debug } = render(
      <InputFields
        onChange={mockOnChange}
        values={defaultValues}
        errors={errorValues}
        isValidationShown={true}
      />
    );
    debug();
    expect(screen.getByText(/Name is required/i)).toBeInTheDocument();
    expect(screen.getByText(/Invalid price/i)).toBeInTheDocument();
    expect(screen.getByText(/Description is too short/i)).toBeInTheDocument();
  });

  it("calls onChange when input values change", async () => {
    const { getByTestId, debug } = render(
      <InputFields
        onChange={mockOnChange}
        values={defaultValues}
        errors={defaultErrors}
        isValidationShown={false}
      />
    );
    debug();
    await act(() =>
      fireEvent.change(getByTestId("name-input"), {
        target: { value: "Test Name" }
      })
    );
    await act(() => {
      fireEvent.change(screen.getByTestId("price-input"), {
        target: { value: "50" }
      });
      fireEvent.change(screen.getByTestId("description-input"), {
        target: { value: "Test Description" }
      });
      fireEvent.change(screen.getByTestId("createdat-input"), {
        target: { value: "2023-01-01" }
      });
    });
    expect(mockOnChange.mock.calls[0][0].target.name).toBe("name");
    expect(mockOnChange.mock.calls[1][0].target.name).toBe("price");
    expect(mockOnChange.mock.calls[2][0].target.name).toBe("description");
    expect(mockOnChange.mock.calls[3][0].target.name).toBe("createdAt");
  });
});
