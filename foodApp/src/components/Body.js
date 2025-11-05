import ResCard from "./ResCard";
import resList from "../utils/mockData";
import { useState } from "react";

const Body = () => {
  const [restList, setResList] = useState(resList);

  return (
    <div className="body">
      {/* <div className="search">Search</div> */}
      <div className="filter">
        <button
          className="filter-btn"
          onClick={() => {
            const filterList = restList.filter((res) => res.avgRating > 4.2);
            setResList(filterList);
          }}>
          Filter Top Rated
        </button>
      </div>
      <div className="res-container">
        {restList.map((res) => (
          <ResCard key={res.id} resData={res} />
        ))}
      </div>
    </div>
  );
};

export default Body;
