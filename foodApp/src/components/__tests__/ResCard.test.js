import { render, screen } from "@testing-library/react";
import ResCard from "../ResCard";
import MOCK_DATA from "../mocks/resCard";
import "@testing-library/jest-dom";

test("Should load Res Card with Mock data", () => {
  render(<ResCard resData={MOCK_DATA} />);
  const resName = screen.getByText("Dindigul Thalappakatti - Since 1957");
  expect(resName).toBeInTheDocument();
});
