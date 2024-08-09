import { useParams } from "react-router-dom";
import useRestuarantMenu from "../util/useRestuarantMenu";
import { useState } from "react";
import Category from "./Category";

const RestuarantCategory = () => {
  const { id } = useParams();
  console.log(id);
  const restaurant = useRestuarantMenu({ id });
  const [showIndex, setShowIndex] = useState(null);
  const categories =
    restaurant?.data?.cards[5]?.groupedCard?.cardGroupMap?.REGULAR?.cards ||
    restaurant?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards;

  console.log(categories);
  const topCategories = categories?.filter(
    (obj) =>
      obj.card.card["@type"] ===
      "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
  );
  console.log(topCategories);

  return (
    <div className="flex flex-col  justify-center items-center my-20 mx-80 p-10 bg-gray-100 w-auto h-full">
      <h1 className="text-black  text-5xl">
        {restaurant?.data?.cards[0]?.card?.card?.text}
      </h1>
      <h3 className="text-black  text-3xl my-3">
        {restaurant?.data?.cards[2]?.card?.card?.info.costForTwoMessage}
      </h3>
      <p> {restaurant?.data?.cards[2]?.card?.card?.info.cuisines.join(" ")}</p>

      {topCategories?.map((obj, index) => {
        // controlled component
        console.log(obj.card.card.title);
        return (
          <Category
            key={obj.card.card.title}
            resObj={obj}
            toggle={index === showIndex ? true : false}
            setShowIndex={() => setShowIndex(index)}
            setNullIndex={() => setShowIndex(null)}
          />
        );
      })}
    </div>
  );
};

export default RestuarantCategory;
