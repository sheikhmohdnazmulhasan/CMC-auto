import * as React from "react";
import * as ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import Root from "./Root";
import Home from "./pages/Home";
import SeatModification from "./pages/Services/SeatModification";
import CarUpholstery from "./pages/Services/CarUpholstery";
import Entertainment from "./pages/Services/Entertainment";
import CentralConsole from "./pages/Services/centralConsole";
import { Cadillac } from "./pages/Cars/Cadillac";
import Mercedes from "./pages/Cars/Mercedes";
import Toyota from "./pages/Cars/Toyota";
import Gmc from "./pages/Cars/Gmc";
import About from "./pages/About";
import Portfolio from "./pages/Portfolio";
import Contact from "./pages/Contact";

const router = createBrowserRouter([

  {
    path: "/", element: <Root />,
    children: [
      { index: true, element: <Home /> },
      { path: '/seat-modification', element: <SeatModification /> },
      { path: '/auto-upholstery', element: <CarUpholstery /> },
      { path: '/entertainment', element: <Entertainment /> },
      { path: '/central-console-design', element: <CentralConsole /> },
      { path: '/cadillac', element: <Cadillac /> },
      { path: '/mercedes', element: < Mercedes /> },
      { path: '/toyota', element: <Toyota /> },
      { path: '/gmc', element: <Gmc /> },
      { path: '/about', element: <About /> },
      { path: '/portfolio', element: <Portfolio /> },
      { path: '/contact', element: <Contact /> }
    ]

  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);