import useRestMenu from "../utils/useRestMenu";
import RestaurantCategory from "./RestaurantCategory";
import Shimmer from "./Shimmer";
import { useState, useContext } from "react";
import UserContext from "../utils/UserContext";

const RestaurantMenu = () => {
  const [showIndex, setShowIndex] = useState(3);
  const { loggedUser } = useContext(UserContext);

  const resInfo = useRestMenu();

  if (resInfo === null) return <Shimmer />;

  const { name, cuisines, avgRatingString, costForTwoMessage } =
    resInfo?.data?.cards[2]?.card?.card?.info;

  const menuItems =
    resInfo?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card
      ?.card?.itemCards;

  const categories =
    resInfo?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
      (c) =>
        c.card.card?.["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );

  return (
    <div className="w-6/12 mx-auto bg-amber-50 my-3 p-8">
      <p className="font-bold text-3xl text-center mb-4">{loggedUser}</p>
      <h1 className="font-bold text-3xl text-center mb-4">{name}</h1>
      <p className="text-xl mb-4">{cuisines.join(",")}</p>
      <div className="flex justify-between italic">
        <p className="text-lg mb-4">{avgRatingString} Rating</p>
        <p className="text-lg mb-4">{costForTwoMessage}</p>
      </div>
      <h2 className="text-2xl font-bold mb-4">Menu</h2>
      <div>
        {categories.map((items, index) => {
          return (
            <RestaurantCategory
              key={items.card.card.categoryId}
              data={items}
              showItems={index === showIndex ? true : false}
              setShowIndex={() => setShowIndex(index)}
            />
          );
        })}
      </div>
    </div>
  );
};

export default RestaurantMenu;
