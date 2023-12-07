import { render,screen} from "@testing-library/react";
import Title from "../Title";

describe("Title", () => {
  it("renders the Title component with the correct text and styles", () => {
    render(<Title />);

    const titleElement = screen.getByText("Create Product");

    expect(titleElement).toBeInTheDocument();
    expect(titleElement).toHaveTextContent("Create Product");
    expect(titleElement).toHaveStyle({
      textAlign: "center"
    });
  });
});
