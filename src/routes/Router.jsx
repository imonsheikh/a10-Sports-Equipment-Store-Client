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
import EquipmentList from "../pages/EquipmentList";
import UpdateProduct from "../pages/UpdateProduct";

  
export const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      errorElement: <ErrorPage></ErrorPage>,
      children: [
        {
            path: '/',
            element: <Home></Home>,
            loader: () => fetch('https://sports-equipments-store-server-v2.vercel.app/allEquipments')
        },
        {
            path: '/allEquipments',
            element: <AllEquipment></AllEquipment>,
            loader: () => fetch('https://sports-equipments-store-server-v2.vercel.app/allEquipments')

        },
        {
            path: '/addEquipment',
            element: <PrivateRoute><AddEquipment></AddEquipment></PrivateRoute>
        },
        {
          path: '/equipmentList',
          element: <PrivateRoute><EquipmentList></EquipmentList></PrivateRoute>,
          loader: () => fetch('https://sports-equipments-store-server-v2.vercel.app/allEquipments')
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
          element: <PrivateRoute><ProductDetails></ProductDetails></PrivateRoute>,
          loader: ({params}) => fetch(`https://sports-equipments-store-server-v2.vercel.app/productDetails/${params.id}`)
        },
        {
          path: '/update/:id',
          element: <PrivateRoute><UpdateProduct></UpdateProduct></PrivateRoute>,
          loader: ({params}) => fetch(`https://sports-equipments-store-server-v2.vercel.app/update/${params.id}`)


        }
      ]
    },
  ]);