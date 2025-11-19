import { CDN_IMG_URL } from "../utils/consts";

const ResCard = ({ resData }) => {
  console.log(resData.info);
  const { name, cuisines, costForTwo, avgRating, sla, cloudinaryImageId } =
    resData?.info;
  return (
    <div className="w-[300px] bg-amber-100 p-4 m-4 hover:bg-amber-200">
      <img
        src={CDN_IMG_URL + cloudinaryImageId}
        alt="biriyani"
        className="rounded mx-auto"
      />
      <h2 className="font-bold py-2 text-lg">{name}</h2>
      <h3>{cuisines.join(", ")}</h3>
      <h4>{costForTwo} </h4>
      <h4>{avgRating} Stars</h4>
      <h4>{sla.deliveryTime} Mins</h4>
    </div>
  );
};

export default ResCard;
