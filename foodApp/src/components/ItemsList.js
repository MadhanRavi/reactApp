import { CDN_IMG_URL } from "../utils/consts";
import { useDispatch } from "react-redux";
import { addItem, removeItem } from "../utils/cartSlice";
const ItemsList = ({ data, cart }) => {
  const dispatch = useDispatch();
  const handleAddItem = (item) => {
    dispatch(addItem(item));
  };
  const handleRemoveItem = (item) => {
    dispatch(removeItem(item));
  };

  return (
    <div
      data-testid="foodItem"
      className="border-b-4 border-b-gray-200 flex justify-between items-center py-2 my-2">
      <div className="w-9/12 pr-2">
        <p className="my-1 py-1 text-xl font-bold">{data.card.info.name}</p>
        <p className="my-1 py-1 italic">
          ₹
          {data.card.info.price
            ? data.card.info.price / 100
            : data.card.info.defaultPrice / 100}
        </p>
        <p className="my-1 py-1 text-md">{data.card.info.description}</p>
      </div>
      <div className="w-3/12 relative pl-2">
        <img src={CDN_IMG_URL + data.card.info.imageId} className="rounded" />
        {!cart && (
          <button
            className="absolute bottom-2 cursor-pointer bg-white text-green-900 p-2 rounded font-bold left-0 right-0 w-18 shadow mx-auto"
            onClick={() => handleAddItem(data)}>
            Add +
          </button>
        )}
        {cart && (
          <button
            className="absolute bottom-2 cursor-pointer bg-white text-red-500 p-2 rounded font-bold left-0 right-0 w-22 shadow mx-auto"
            onClick={() => handleRemoveItem(data)}>
            Remove -
          </button>
        )}
      </div>
    </div>
  );
};

export default ItemsList;
