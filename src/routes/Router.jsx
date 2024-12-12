import {
    createBrowserRouter,
    RouterProvider,
  } from "react-router-dom";
import Main from "../layouts/Main";
import Home from "../pages/Home";
import AllEquipment from "../pages/AllEquipment";
import AddEquipment from "../pages/AddEquipment";
import ErrorPage from "../pages/ErrorPage";
import Login from "../pages/Login";
import Register from "../pages/Register";
import PrivateRoute from "./PrivateRoute";
import ProductDetails from "../pages/ProductDetails";

  
export const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      errorElement: <ErrorPage></ErrorPage>,
      children: [
        {
            path: '/',
            element: <Home></Home>,
            loader: () => fetch('http://localhost:5050/allEquipments')
        },
        {
            path: '/allEquipments',
            element: <PrivateRoute><AllEquipment></AllEquipment></PrivateRoute>,
            loader: () => fetch('http://localhost:5050/allEquipments')

        },
        {
            path: '/addEquipment',
            element: <PrivateRoute><AddEquipment></AddEquipment></PrivateRoute>
        },
        {
          path: '/login',
          element: <Login></Login>
        },
        {
          path: '/register',
          element: <Register></Register>
        },
        {
          path: '/productDetails/:id',
          element: <ProductDetails></ProductDetails>,
          loader: ({params}) => fetch(`http://localhost:5050/productDetails/${params.id}`)
        }
      ]
    },
  ]);