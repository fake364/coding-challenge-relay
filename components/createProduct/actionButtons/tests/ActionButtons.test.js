import { fireEvent, render, screen } from "@testing-library/react";
import ActionButtons from "../ActionButtons";

describe("ActionButtons", () => {
  it("renders the ActionButtons component with Reset and Create buttons", () => {
    const mockOnReset = jest.fn();
    const mockOnSubmit = jest.fn();

    render(
      <ActionButtons
        buttonsXS={6}
        buttonsTabIndexes={{ reset: 1, submit: 2 }}
        isSubmitButtonDisabled={false}
        onSubmit={mockOnSubmit}
        onReset={mockOnReset}
      />
    );

    const resetButton = screen.getByText("Reset");
    const createButton = screen.getByText("Create");

    expect(resetButton).toBeInTheDocument();
    expect(createButton).toBeInTheDocument();
  });

  it("calls onReset when Reset button is clicked", () => {
    const mockOnReset = jest.fn();
    const mockOnSubmit = jest.fn();

    render(
      <ActionButtons
        buttonsXS={6}
        buttonsTabIndexes={{ reset: 1, submit: 2 }}
        isSubmitButtonDisabled={false}
        onSubmit={mockOnSubmit}
        onReset={mockOnReset}
      />
    );

    const resetButton = screen.getByText("Reset");

    fireEvent.click(resetButton);

    expect(mockOnReset).toHaveBeenCalledTimes(1);
  });

  it("calls onSubmit when Create button is clicked", () => {
    const mockOnReset = jest.fn();
    const mockOnSubmit = jest.fn();

    render(
      <ActionButtons
        buttonsXS={6}
        buttonsTabIndexes={{ reset: 1, submit: 2 }}
        isSubmitButtonDisabled={false}
        onSubmit={mockOnSubmit}
        onReset={mockOnReset}
      />
    );

    const createButton = screen.getByText("Create");

    fireEvent.click(createButton);

    expect(mockOnSubmit).toHaveBeenCalledTimes(1);
  });
});
