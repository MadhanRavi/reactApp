import Sum from "../Sum";

test("Test the sum of two numbers", () => {
  const result = Sum(3, 4);

  // Assertion
  expect(result).toBe(7);
});
