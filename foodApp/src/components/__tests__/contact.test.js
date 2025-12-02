import { render, screen } from "@testing-library/react";
import Contact from "../Contact";
import "@testing-library/jest-dom";

test("Check the contact component renders", () => {
  render(<Contact />);
  const heading = screen.getByRole("heading");
  expect(heading).toBeInTheDocument();
});

test("Check the button is there in contact page", () => {
  render(<Contact />);
  const button = screen.getByRole("button");
  expect(button).toBeInTheDocument();
});

test("Check the input name is there in contact page", () => {
  render(<Contact />);
  const inputName = screen.getByPlaceholderText("Enter Name");
  expect(inputName).toBeInTheDocument();
});

test("Check the input boxes are there in contact page", () => {
  render(<Contact />);
  const inputBoxes = screen.getAllByRole("textbox");
  expect(inputBoxes.length).toBe(3);
});
