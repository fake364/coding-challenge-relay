import HomeButton from "../HomeButton";
import { fireEvent, render } from "@testing-library/react";
import { useRouter } from "next/router";

jest.mock("next/router", () => ({ useRouter: jest.fn() }));

describe("HomeButton", () => {
  it("renders the HomeButton component", () => {
    const { getByLabelText } = render(<HomeButton />);
    const homeButton = getByLabelText("home");
    expect(homeButton).toBeInTheDocument();
  });

  it('triggers router.push("/") when clicked', () => {
    const routerMock = { push: jest.fn() };
    useRouter.mockImplementation(() => routerMock);
    const { getByLabelText } = render(<HomeButton />);
    const homeButton = getByLabelText("home");

    fireEvent.click(homeButton);

    expect(routerMock.push).toHaveBeenCalledWith("/");
  });
});
