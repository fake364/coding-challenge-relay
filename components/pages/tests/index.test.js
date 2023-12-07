import {
  act,
  fireEvent,
  logRoles,
  render,
  screen
} from "@testing-library/react";
import CreateProduct from "../../../pages/create";
import useCreateProduct from "../../createProduct/hooks/useCreateProduct";

jest.mock("../../createProduct/hooks/useCreateProduct", () => ({
  default: jest.fn(() => ({})),
  __esModule: true
}));
describe("createProduct index page", () => {
  it("should call createProduct query on submit (success flow)", async () => {
    const spy = jest.fn();
    useCreateProduct.mockReturnValue({ createProduct: spy });
    const { container, getByTestId, getByRole, getAllByRole } = render(
      <CreateProduct />
    );
    await act(() =>
      fireEvent.change(getByTestId("name-input"), {
        target: { value: "Test Name" }
      })
    );
    await act(() => {
      fireEvent.change(screen.getByRole("spinbutton"), {
        target: { value: "50" }
      });
      fireEvent.change(screen.getByTestId("description-input"), {
        target: { value: "Test Description" }
      });
      fireEvent.change(screen.getByTestId("createdat-input"), {
        target: { value: "2023-01-01" }
      });
    });
    act(() => {
      fireEvent.click(getAllByRole("button")[2]);
    });
    expect(spy).toBeCalledWith({
      createdAt: "2023-01-01",
      description: "Test Description",
      name: "Test Name",
      price: 50
    });
    expect(screen.getByTestId("snackbar")).toBeVisible();
  });

  const expectToHaveErrors = () => {
    expect(screen.queryByTestId("snackbar")).toBeNull();
    expect(
      screen.getByText("Price shouldn't be below or equal zero")
    ).toBeInTheDocument();
    expect(
      screen.getByText("Min length for this field is 10")
    ).toBeInTheDocument();
    expect(
      screen.getByText("Min length for this field is 4")
    ).toBeInTheDocument();
  };

  const fillWithBadData = () => {
    act(() =>
      fireEvent.change(screen.getByTestId("name-input"), {
        target: { value: "Te" }
      })
    );
    act(() => {
      fireEvent.change(screen.getByRole("spinbutton"), {
        target: { value: 0 }
      });
      fireEvent.change(screen.getByTestId("description-input"), {
        target: { value: "Te" }
      });
      fireEvent.change(screen.getByTestId("createdat-input"), {
        target: { value: "2023-01-01" }
      });
    });
  };

  it("should not call createProduct query and show error on bad input data", async () => {
    const spy = jest.fn();
    useCreateProduct.mockReturnValue({ createProduct: spy });
    const { getAllByRole } = render(<CreateProduct />);
    fillWithBadData();
    act(() => {
      fireEvent.click(getAllByRole("button")[2]);
    });
    expect(spy).not.toBeCalled();
    expect(screen.queryByTestId("snackbar")).toBeNull();
    expectToHaveErrors();
  });

  it("should fill data with bad data and then reveal errrors and then reset them with button", async () => {
    const spy = jest.fn();
    useCreateProduct.mockReturnValue({ createProduct: spy });
    const { getAllByRole } = render(<CreateProduct />);
    fillWithBadData();
    act(() => {
      fireEvent.click(getAllByRole("button")[2]);
    });
    expect(spy).not.toBeCalled();
    expect(screen.queryByTestId("snackbar")).toBeNull();
    expectToHaveErrors();
    act(() => {
      fireEvent.click(getAllByRole("button")[1]);
    });
    expect(() => {
      expectToHaveErrors();
    }).toThrow();
    expect(screen.getByRole("spinbutton").value).toBe("");
    expect(screen.getByTestId("name-input").value).toBe("");
    expect(screen.getByTestId("description-input").value).toBe("");
  });
});
