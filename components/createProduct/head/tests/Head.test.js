import BlockHead from "../Head";
import { render, screen } from "@testing-library/react";

jest.mock("next/head", () => {
  return {
    __esModule: true,
    default: ({ children }: { children: Array<React.ReactElement> }) => {
      return <>{children}</>;
    }
  };
});
describe("BlockHead", () => {
  it("renders the BlockHead component with the correct title", () => {
    render(<BlockHead />);
    const titleElement = document.querySelector("title");
    expect(titleElement).toBeInTheDocument();
    expect(titleElement).toHaveTextContent("Create Product");
  });

  it("renders the BlockHead component with the correct viewport meta tag", () => {
    render(<BlockHead />);

    const viewportMetaElement = document.querySelector('meta[name="viewport"]');
    expect(viewportMetaElement).toBeInTheDocument();
    expect(viewportMetaElement).toHaveAttribute(
      "content",
      "minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no"
    );
  });

  it("renders the BlockHead component with CssBaseline", () => {
    render(<BlockHead />);

    const cssBaselineElement = document.querySelector("head style");
    expect(cssBaselineElement).toBeInTheDocument();
  });
});
