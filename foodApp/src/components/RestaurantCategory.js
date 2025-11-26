import ItemsList from "./ItemsList";

const RestaurantCategory = ({ data, showItems, setShowIndex }) => {
  const handleClick = () => {
    setShowIndex();
  };

  return (
    <div className="shadow-lg my-3 bg-gray-50 cursor-pointer p-4 rounded">
      <div className="flex justify-between" onClick={handleClick}>
        <span className="text-2xl font-bold">
          {data.card.card.title} ({data.card.card.itemCards.length})
        </span>
        <span>⬇️</span>
      </div>
      {data.card.card.itemCards.map((item) => {
        return showItems && <ItemsList key={item.card.info.id} data={item} />;
      })}
    </div>
  );
};

export default RestaurantCategory;
