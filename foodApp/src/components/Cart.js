import React from "react";
import { useSelector } from "react-redux";
import ItemsList from "./ItemsList";
import { useDispatch } from "react-redux";
import { clearCart } from "../utils/cartSlice";

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);
  const dispatch = useDispatch();
  const handleClearCart = () => {
    dispatch(clearCart());
  };

  return (
    <div className="w-6/12 mx-auto my-2">
      <h1 className="text-center font-bold text-2xl m-2 p-2">Cart</h1>
      <div className="flex justify-between items-center mb-4">
        <p className="text-lg m-2 p-2">Items</p>
        {cartItems.length > 0 && (
          <button
            className="bg-gray-200 p-2 font-bold rounded cursor-pointer"
            onClick={() => handleClearCart()}>
            Clear Cart
          </button>
        )}
      </div>
      {cartItems.length === 0 && (
        <h1 className="font-bold text-2xl text-center">Your cart is empty!!</h1>
      )}
      {cartItems.length > 0 && (
        <div className="border border-gray-200 py-2 px-4">
          {cartItems.map((item) => {
            return (
              <ItemsList key={item.card.info.id} data={item} cart={true} />
            );
          })}
        </div>
      )}
    </div>
  );
};

export default Cart;
