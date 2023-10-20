import { createBrowserRouter } from "react-router-dom";
import Root from "../layout/Root/Root";
import Home from "../pages/Home/Home";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import Login from "../pages/Login/Login";
import SignUp from "../pages/SignUp/SignUp";
import AddProduct from "../pages/AddProduct/AddProduct";
import BrandedProduct from "../pages/BrandedProduct/BrandedProduct";
import PrivateRoute from "./PrivateRoute/PrivateRoute";
import UpdateProduct from "../pages/UpdateProduct/UpdateProduct";
import ProductDetails from "../pages/ProductDetails/ProductDetails";
import MyCart from "../pages/MyCart/MyCart";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/signUp",
        element: <SignUp></SignUp>,
      },
      {
        path: "/addProduct",
        element: (
          <PrivateRoute>
            <AddProduct></AddProduct>
          </PrivateRoute>
        ),
      },
      {
        path: `/brandedProduct/:brandName`,
        element: (
          <PrivateRoute>
            <BrandedProduct></BrandedProduct>
          </PrivateRoute>
        ),
        loader: () =>
          fetch("https://brandshop-server-six.vercel.app/brandedProduct"),
      },
      {
        path: `/prodUpdate/:id`,
        element: (
          <PrivateRoute>
            <UpdateProduct></UpdateProduct>
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(`https://brandshop-server-six.vercel.app/product/${params.id}`),
      },
      {
        path: `/productDetails/:id`,
        element: (
          <PrivateRoute>
            <ProductDetails></ProductDetails>
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(`https://brandshop-server-six.vercel.app/product/${params.id}`),
      },
      {
        path: `/myCart`,
        element: (
          <PrivateRoute>
            <MyCart></MyCart>
          </PrivateRoute>
        ),
        loader: () =>
          fetch("https://brandshop-server-six.vercel.app/cartProducts"),
      },
    ],
  },
]);

export default router;
