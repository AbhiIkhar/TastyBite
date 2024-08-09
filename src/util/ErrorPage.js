import { useRouteError, Link } from "react-router-dom";
import dog from "../images/Error-Dog.jpg";

const ErrorPage = () => {
  const error = useRouteError();
  console.log(error);
  return (
    <div className="flex m-20 p-10 justify-center content-center w-full h-full box-border">
      <div className="w-6/12 h-6/12">
        <div className="my-3">
          <h1 className="font-medium from-neutral-600">Oops!</h1>

          <p>
            <i> {error.statusText || error.message} </i>
          </p>
          <p>
            Go To fashionMart
            <span>
              {"  "}
              <Link to="/" className="underline">
                {" "}
                HOME{" "}
              </Link>
            </span>{" "}
            Page
          </p>
        </div>
        <div>
          <img src={dog} alt="image" />
        </div>
      </div>
    </div>
  );
};

export default ErrorPage;
