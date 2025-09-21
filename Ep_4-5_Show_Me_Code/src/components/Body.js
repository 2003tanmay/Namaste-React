import RestaurantCard from "./RestaurantCard";
import restaurantList from "../utils/mockData";
import { useState } from "react"; //importing useState hook 

const Body = () => {
  // We are using useState hook which is a state variable and with its default value(restaurantList)
  // const [listOfRestaurents] = useState(restaurantList);

  // to modify this data we introduce setListOfRestaurents function.
  const [listOfRestaurents, setListOfRestaurents] = useState(restaurantList);

  return (
    <div className="body">
      <div className="search">Search</div>
      <div className="filter">
        <button className = "filter-btn" onClick={() => {
          // const filteredList = listOfRestaurents.filter(
          //   (restaurant) => restaurant.data.avgRating > 4
          // );
          const filteredList = [...listOfRestaurents].sort(
            (a, b) => parseFloat(b.data.avgRating) - parseFloat(a.data.avgRating)
          );
          setListOfRestaurents(filteredList); // updating the state with the new list using designated function
        }}>Top rated</button>
      </div>
      <div className="res-container">
        {listOfRestaurents.map((restaurant) => {
          return (
            <RestaurantCard key={restaurant.data.id} {...restaurant.data} />
          );
        })}
      </div>
    </div>
  );
};

export default Body;