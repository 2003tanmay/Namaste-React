import {CDN_URL} from "../utils/constants";  //named import

const RestaurantCard = ({
  cloudinaryImageId,
  name,
  cuisines,
  lastMileTravelString,
  costForTwoString,
  avgRating,
}) => {
  return (
    <div className="res-card">
      <div className="card-image">
        <img
          src={
            CDN_URL +
            cloudinaryImageId
          }
        />
      </div>
      <h3>{name}</h3>
      <h4>{cuisines.join(", ")}</h4>
      <h4>{avgRating} Stars</h4>
      <h4>{lastMileTravelString}</h4>
      <h4>{costForTwoString}</h4>
    </div>
  );
};

export default RestaurantCard;