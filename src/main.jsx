import * as React from "react";
import * as ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import Root from "./Root";
import Home from "./pages/Home";
import SeatModification from "./pages/Services/SeatModification";

const router = createBrowserRouter([
  {
    path: "/", element: <Root />,
    children: [
      { index: true, element: <Home /> },
      { path: '/seat-modification', element: <SeatModification /> }
    ]

  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);