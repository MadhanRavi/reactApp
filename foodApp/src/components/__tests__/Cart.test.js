import { act, fireEvent, render, screen } from "@testing-library/react";
import RestaurantMenu from "../RestaurantMenu";
import Header from "../Header";
import { BrowserRouter } from "react-router-dom";
import MOCK_DATA from "../mocks/resMenu.json";
import "@testing-library/jest-dom";
import { Provider } from "react-redux";
import appStore from "../../utils/appStore";
import Cart from "../Cart.js";

global.fetch = jest.fn(() => {
  return Promise.resolve({
    json: () => {
      return Promise.resolve(MOCK_DATA);
    },
  });
});

test("should add cart work in Res Menu component", async () => {
  await act(async () =>
    render(
      <Provider store={appStore}>
        <BrowserRouter>
          <Header />
          <RestaurantMenu />
          <Cart />
        </BrowserRouter>
      </Provider>
    )
  );

  const accHeader = screen.getByText("Starters (8)");
  fireEvent.click(accHeader);

  expect(screen.getAllByTestId("foodItem").length).toBe(8);

  expect(screen.getByText("Cart - (0) items")).toBeInTheDocument();

  const addBtns = screen.getAllByRole("button", { name: "Add +" });

  fireEvent.click(addBtns[0]);
  expect(screen.getByText("Cart - (1) items")).toBeInTheDocument();
  fireEvent.click(addBtns[1]);
  expect(screen.getByText("Cart - (2) items")).toBeInTheDocument();

  expect(screen.getAllByTestId("foodItem").length).toBe(10);

  const clearCartBtn = screen.getByRole("button", { name: "Clear Cart" });
  fireEvent.click(clearCartBtn);
  expect(screen.getAllByTestId("foodItem").length).toBe(8);

  expect(screen.getByText("Your cart is empty!!")).toBeInTheDocument();
});
