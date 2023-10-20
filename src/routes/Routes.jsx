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
        loader: () => fetch("http://localhost:5000/brandedProduct"),
      },
      {
        path: `/prodUpdate/:id`,
        element: (
          <PrivateRoute>
            <UpdateProduct></UpdateProduct>
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(`http://localhost:5000/product/${params.id}`),
      },
      {
        path: `/productDetails/:id`,
        element: (
          <PrivateRoute>
            <ProductDetails></ProductDetails>
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(`http://localhost:5000/product/${params.id}`),
      },
    ],
  },
]);

export default router;
