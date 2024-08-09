import ReactDOM from "react-dom/client";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import ErrorPage from "./util/ErrorPage";
import Header from "./components/Header";
import Body from "./components/Body";
import RestuarantCategory from "./components/RestaurantCategory";
const App = () => {
  return (
    <div className="">
      <Header />
      <Outlet />
    </div>
  );
};

const AppRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/resId/:id",
        element: <RestuarantCategory />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={AppRouter} />);
