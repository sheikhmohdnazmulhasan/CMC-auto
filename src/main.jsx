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

const router = createBrowserRouter([
  {
    path: "/", element: <Root />,
    children: [
      { index: true, element: <Home /> },
      { path: '/seat-modification', element: <SeatModification /> },
      { path: '/auto-upholstery', element: <CarUpholstery /> },
      { path: '/entertainment', element: <Entertainment /> },
      { path: '/central-console-design', element: <CentralConsole /> }
    ]

  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);