import { CDN_IMG_URL } from "../utils/consts";

const ResCard = ({ resData }) => {
  const { name, cuisines, costForTwo, avgRating, sla, cloudinaryImageId } =
    resData;
  return (
    <div className="res-card">
      <img src={CDN_IMG_URL + cloudinaryImageId} alt="biriyani" />
      <h2>{name}</h2>
      <h3>{cuisines.join(", ")}</h3>
      <h4>₹{costForTwo / 100} for Two</h4>
      <h4>{avgRating} Stars</h4>
      <h4>{sla.deliveryTime} Mins</h4>
    </div>
  );
};

export default ResCard;
