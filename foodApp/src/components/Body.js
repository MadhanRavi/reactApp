import ResCard, { withPromotedLabel } from "./ResCard";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import { useEffect, useState, useContext } from "react";
import UserContext from "../utils/UserContext";

const Body = () => {
  const [restList, setResList] = useState([]);
  const [filterRestList, setFilterRestList] = useState([]);
  const [searchText, setSearchText] = useState("");
  const { loggedUser, setUserName } = useContext(UserContext);

  const ResCardPromoted = withPromotedLabel(ResCard);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=11.3297244&lng=77.69786400000001&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();
    setResList(
      // Optional Jaining
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setFilterRestList(
      // Optional Jaining
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };

  const onlineStatus = useOnlineStatus();

  if (!onlineStatus)
    return <h1>You are Offline, Check the internet connection!!!</h1>;

  if (restList.length === 0) return <Shimmer />;

  // Conditional Rendering
  return (
    <div className="body">
      <div className="flex items-center m-4">
        <div className="search">
          <input
            type="text"
            name="search"
            className="border border-solid"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          />
          <button
            className="bg-gray-300 rounded-lg py-2 px-4 m-2 hover:bg-gray-400 cursor-pointer"
            onClick={() => {
              const filterList = restList.filter((res) =>
                searchText.length > 0
                  ? res?.info?.name
                      .toLowerCase()
                      .includes(searchText.toLowerCase())
                  : restList
              );
              setFilterRestList(filterList);
            }}>
            Search
          </button>
        </div>
        <div className="search">
          <button
            className="bg-gray-300 rounded-lg py-2 px-4 m-2 hover:bg-gray-400 cursor-pointer"
            onClick={() => {
              const filterList = restList.filter(
                (res) => res?.info?.avgRating > 4.5
              );
              setResList(filterList);
            }}>
            Filter Top Rated
          </button>
        </div>
        <div className="search">
          <label>Username: </label>
          <input
            type="text"
            className="border border-black p-2"
            value={loggedUser}
            onChange={(e) => setUserName(e.target.value)}
          />
        </div>
      </div>
      <div className="flex flex-wrap">
        {filterRestList.map((res) => (
          <Link key={res.info.id} to={"/restaurant/" + res.info.id}>
            {res.info.isOpen ? (
              <ResCardPromoted resData={res} />
            ) : (
              <ResCard resData={res} />
            )}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
