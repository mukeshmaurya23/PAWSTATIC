import "./App.css";

import { RouterProvider, createBrowserRouter } from "react-router-dom";
import ErrorPage from "./components/pages/ErrorPage";
import Login from "./components/pages/signup/Login";

import MainConatiner from "./components/pages/MainConatiner";
import Signup from "./components/pages/signup/Signup"; //
import About from "./components/pages/About";

import Reviews from "./components/pages/Reviews";
import SideBar from "./components/pages/SideBar";

import Booking from "./components/pages/Booking/Booking";
import Services from "./components/pages/services/Services";
import Account from "./components/pages/services/Account";
import HomeAddress from "./components/pages/services/HomeAddress";
import PaymentInfo from "./components/pages/services/PaymentInfo";
import BookingCard from "./components/pages/Booking/BookingCard";
const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <MainConatiner />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/signup",
    element: <Signup />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/profile",
    element: <SideBar />,
    children: [
      {
        index: true,
        element: <Services />,
      },
      {
        path: "account",
        element: <Account />,
        children: [
          {
            index: true,

            element: <HomeAddress />,
          },
          {
            path: "payment-info",
            element: <PaymentInfo />,
          },
        ],
      },
    ],
  },
  // {
  //   path: "/about",
  //   element: <About />,
  // },
  {
    path: "/booking",
    element: <Booking />,
  },

  // {
  //   path: "/reviews",
  //   element: <Reviews />,
  // },
]);

function App() {
  return (
    <>
      <RouterProvider router={appRouter} />
    </>
  );
}

export default App;
