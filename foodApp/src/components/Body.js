import ResCard from "./ResCard";
import resList from "../utils/mockData";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";

const Body = () => {
  const [restList, setResList] = useState([]);
  const [filterRestList, setFilterRestList] = useState([]);
  const [searchText, setSearchText] = useState("");

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

  // Conditional Rendering
  return restList.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="filter">
        <div className="search">
          <input
            type="text"
            name="search"
            className="search-box"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          />
          <button
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
        <button
          className="filter-btn"
          onClick={() => {
            const filterList = restList.filter(
              (res) => res?.info?.avgRating > 4.5
            );
            setResList(filterList);
          }}>
          Filter Top Rated
        </button>
      </div>
      <div className="res-container">
        {filterRestList.map((res) => (
          <ResCard key={res.info.id} resData={res} />
        ))}
      </div>
    </div>
  );
};

export default Body;
