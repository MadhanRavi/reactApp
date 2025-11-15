import useRestMenu from "../utils/useRestMenu";
import Shimmer from "./Shimmer";

const RestaurantMenu = () => {
  const resInfo = useRestMenu();

  if (resInfo === null) return <Shimmer />;

  const { name, cuisines, avgRatingString, costForTwoMessage } =
    resInfo?.data?.cards[2]?.card?.card?.info;

  const menuItems =
    resInfo?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card
      ?.card?.itemCards;
  console.log(menuItems);

  return (
    <div>
      <h1>{name}</h1>
      <p>{cuisines.join(",")}</p>
      <p>{avgRatingString} Rating</p>
      <p>{costForTwoMessage}</p>
      <h2>Menu</h2>
      <ul>
        {menuItems.map((items) => {
          return (
            <li key={items.card.info.id}>
              {items.card.info.name} - ₹{items.card.info.price / 100}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default RestaurantMenu;
