import { RouterProvider, createBrowserRouter } from "react-router-dom";
import About from "./pages/About";
import Cart from "./pages/Cart";
import Checkout from "./pages/Checkout";
import Error from "./pages/Error";
import HomeLayout from "./pages/HomeLayout";
import Landing from "./pages/Landing";
import Login from "./pages/Login";
import Orders from "./pages/Orders";
import Products from "./pages/Products";
import Register from "./pages/Register";
import SingleProduct from "./pages/SingleProduct";
import ErrorElement from "./components/ErrorElement";

// loader
import { loader as landingLoader } from "./pages/Landing";
import { loader as singleProductLoader } from "./pages/SingleProduct";
import { loader as productsLoader } from "./pages/Products";
import { loader as checkoutLoader } from "./pages/Checkout";
import { loader as ordersLoader } from "./pages/Orders";

// action
import { action as checkoutAction } from "./components/CheckoutForm";
import { action as loginAction } from "./pages/Login";
import { action as registerAction } from "./pages/Register";
// store
import { store } from "./store";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout />,
    errorElement: <Error />,
    children: [
      /*An index route can be thought of as a default child route. In React Router, if no children match a parent route, it will display an index route if one is defined. An index route has no path and instead has an index Boolean property*/
      {
        index: true,
        element: <Landing />,
        loader: landingLoader,
        errorElement: <ErrorElement />,
      },
      { path: "about", element: <About /> },
      {
        path: "products",
        element: <Products />,
        errorElement: <ErrorElement />,
        loader: productsLoader,
      },
      {
        path: "products/:id",
        element: <SingleProduct />,
        loader: singleProductLoader,
        errorElement: <ErrorElement />,
      },
      { path: "cart", element: <Cart /> },
      { path: "orders", element: <Orders />, loader: ordersLoader(store) },
      {
        path: "checkout",
        element: <Checkout />,
        loader: checkoutLoader(store),
        action: checkoutAction(store),
      },
    ],
  },
  {
    path: "login",
    element: <Login />,
    errorElement: <Error />,
    action: loginAction(store),
  },
  {
    path: "register",
    element: <Register />,
    errorElement: <Error />,
    action: registerAction,
  },
]);

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
