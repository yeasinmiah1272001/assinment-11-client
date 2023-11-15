import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home/Home";
import Error from "../Error/Error";
import Login from "../Pages/Login/Login";
import SignUp from "../Pages/SignUp/SignUp";

import Private from "../Pages/Private/Private";
import DeshBoard from "../Pages/DeshBoard/DeshBoard";
import AddProduct from "../Pages/DeshBoard/AddProduct/AddProduct";
import Title from "../Pages/DeshBoard/Title/Title";
import MyService from "../Pages/DeshBoard/MyService/MyService";
import Update from "../Pages/DeshBoard/Update/Update";
import AllService from "../Pages/AllService/AllService";
import Details from "../Pages/Details/Details";
import Schedules from "../Pages/DeshBoard/Schedules/Schedules";
// import Update from "../Pages/DeshBoard/Update/Update";




const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    errorElement: <Error></Error>,
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
        path: "/up",
        element: <SignUp></SignUp>,
      },
      {
        path: "/allservice",
        element: (
          <Private>
            <AllService></AllService>
          </Private>
        ),
        loader: () =>
          fetch("https://assinment-11-server-rust.vercel.app/allservice"),
      },
      {
        path: "/details/:id",
        element: (
          <Private>
            <Details></Details>
          </Private>
        ),
        loader: () =>
          fetch("https://assinment-11-server-rust.vercel.app/services"),
      },

      {
        path: "/desh",
        element: (
          <Private>
            <DeshBoard></DeshBoard>
          </Private>
        ),
        children: [
          {
            path: "/desh",
            element: <Title></Title>,
          },
          {
            path: "/desh/add",
            element: (
              <Private>
                <AddProduct></AddProduct>
              </Private>
            ),
          },
          {
            path: "/desh/my",
            element: (
              <Private>
                <MyService></MyService>
              </Private>
            ),
            loader: () =>
              fetch("https://assinment-11-server-rust.vercel.app/booking"),
          },

          {
            path: "/desh/update/:id",
            element: <Update></Update>,
            loader: ({ params }) =>
              fetch(
                `https://assinment-11-server-rust.vercel.app/booking/${params.id}`
              ),
          },
          {
            path: "/desh/sc",
            element: <Schedules></Schedules>,
          },
        ],
      },
    ],
  },
]);
export default router;