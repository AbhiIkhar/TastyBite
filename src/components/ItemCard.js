import { CDN_URL } from "../util/constant";
const ItemCard = (props) => {
  const { resObj } = props;
  // console.log(resObj);
  return (
    <div className="m-4 flex">
      <div className="w-9/12">
        <div className="py-5">
          <h1 className="text-lg font-bold">{resObj?.name}</h1>
          <h3>{resObj?.defaultPrice / 100 || resObj?.price / 100}₹</h3>
        </div>
        <p>{resObj?.description}</p>
      </div>
      <div className="relative w-3/12 p-4">
        <div className="absolute left-16 top-6 border-2 border-black bg-black rounded-md">
          <button className="text-white font-normal">Add +</button>
        </div>
        <img className="w-full" src={CDN_URL + resObj?.imageId} alt="image" />
      </div>
    </div>
  );
};

export default ItemCard;

/*


*/
