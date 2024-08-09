import { useEffect, useState } from "react";
import { RestaurantAPI } from "../util/constant";

const useRestuarantMenu = ({ id }) => {
  const [restaurant, setRestaurant] = useState(null);

  //   console.log("resId: " + id);

  const API = RestaurantAPI + id;

  //   console.log(API);

  useEffect(() => {
    fetchData();
  }, []);

  async function fetchData() {
    const response = await fetch(API);
    const json = await response.json();

    setRestaurant(json);
  }

  return restaurant;
};

export default useRestuarantMenu;
