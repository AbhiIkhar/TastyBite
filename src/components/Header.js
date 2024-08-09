import SVG_LOGO from "../images/logo-no-background.svg";
import { Link } from "react-router-dom";
const Header = () => {
  return (
    <>
      <div className="bg-[#f8e2f6] flex justify-between content-center m-10 rounded-lg">
        <div className="flex justify-center content-center w-20 h-20 m-4">
          <img className="" src={SVG_LOGO} alt="img" />
        </div>
        <input
          type="search"
          className="w-3/12 h-5 rounded my-10 p-5 box-border focus:outline-none"
          placeholder="Search"
        />
        <div className="flex justify-center p-10">
          <ul className="flex justify-evenly content-center text-2xl">
            <li>Login</li>
            <li className="list-none px-2">Favourite</li>
            <li>🛒-CART</li>
          </ul>
        </div>
      </div>

      <div>
        <ul className="flex justify-evenly content-center text-2xl">
          <li>
            <Link to="/">HOME</Link>
          </li>
          <li>Offers</li>
          <li>Filters</li>
        </ul>
      </div>
    </>
  );
};

export default Header;
