import { CDN_URL } from "../util/constant";
import { Link } from "react-router-dom";
const Restaurant = ({ restaurants }) => {
  return (
    <div className="flex flex-wrap m-10 p-4 justify-center content-center">
      {restaurants.map((res) => {
        return (
          <div
            key={res.info.id}
            className="flex flex-col w-3/12 h-3/12 m-4 p-4 border-2 border-gray-400 shadow-sm shadow-gray-600 slow-transition hover:scale-95  hover:translate-z-1"
          >
            <Link to={"/resId/" + res.info.id}>
              <div className="w-full h-4/12 p-1">
                <img src={CDN_URL + res.info.cloudinaryImageId} />
              </div>
              <div className="w-full h-8/12 text-center">
                <h1 className="font-bold">{res.info.name}</h1>
                <h3 className="font-bold">{res.info.avgRating}</h3>
                <h3 className="font-bold">{res.info.costForTwo}</h3>
                <p className="font-bold">{res.info.cuisines.join(" ")}</p>
              </div>
            </Link>
          </div>
        );
      })}
    </div>
  );
};

export default Restaurant;
