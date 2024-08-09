import { useEffect, useState } from "react";
import { API } from "../util/constant";
import Shimmer from "./Shimmer";
import Restaurant from "./Restaurant";

const Body = () => {
  const [restaurants, setRestaurants] = useState(null);
  const [filterRestaurants, setFilterRestaurants] = useState(null);
  useEffect(() => {
    fetchData();
  }, []);

  async function fetchData() {
    const response = await fetch(API);
    const jsonData = await response.json();

    console.log(jsonData);
    const resList =
      jsonData?.data?.success?.cards?.[1]?.card?.card?.gridElements
        ?.infoWithStyle?.restaurants;

    console.log(resList);
    setRestaurants(resList);
  }

  return restaurants === null ? (
    <Shimmer />
  ) : (
    <Restaurant restaurants={restaurants} />
  );
};

export default Body;
