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
import About from "./pages/About";
import Portfolio from "./pages/Portfolio";
import Contact from "./pages/Contact";
import VClass5 from "./pages/Car Details/VClass5";
import VClass4 from "./pages/Car Details/VClass4";
import Falcon from "./pages/Car Details/Falcon";
import Sprinter from "./pages/Car Details/Sprinter";
import Services from "./pages/Services";
import LongBussesType from "./pages/Car Details/LongBussesType";
import ErrorPage from "./pages/ErrorPage";
import MercedesGClass from "./pages/Car Details/MercedesGClass";
import MercedesSclass from "./pages/Car Details/MercedesSclass";
import HyundaiStaria from "./pages/Car Details/HyundaiStaria";
import Lexus from "./pages/Car Details/Lexus";
import Gmc from "./pages/Car Details/Gmc";
import ToyotaCoaster from "./pages/Car Details/ToyotaCoaster";
import CamperBus from "./pages/Car Details/CamperBus";
import MobileOfficeBus from "./pages/Car Details/MobileOfficeBus";
import MobilityBus from "./pages/Car Details/MobilityBus";

const router = createBrowserRouter([

  {
    path: "/", element: <Root />, errorElement: <ErrorPage />,
    children: [
      { index: true, element: <Home /> },
      { path: '/seat-modification', element: <SeatModification /> },
      { path: '/auto-upholstery', element: <CarUpholstery /> },
      { path: '/entertainment', element: <Entertainment /> },
      { path: '/central-console-design', element: <CentralConsole /> },
      { path: '/about', element: <About /> },
      { path: '/services', element: <Services /> },
      { path: '/media', element: <Portfolio /> },
      { path: '/contact', element: <Contact /> },
      { path: '/v-class-5', element: <VClass5 /> },
      { path: '/v-class-4', element: <VClass4 /> },
      { path: '/falcon', element: <Falcon /> },
      { path: '/sprinter', element: <Sprinter /> },
      { path: '/hyundai-staria', element: <HyundaiStaria /> },
      { path: '/lexus', element: <Lexus /> },
      { path: '/gmc', element: <Gmc /> },
      { path: '/toyota-coaster', element: <ToyotaCoaster /> },
      { path: '/camper-bus', element: <CamperBus /> },
      { path: '/mobile-office-bus', element: <MobileOfficeBus /> },
      { path: '/mobility-bus', element: <MobilityBus /> },
      { path: '/mercedes-s-class', element: <MercedesSclass /> },
      { path: '/mercedes-g-class', element: < MercedesGClass /> },
      { path: '/long-busses-type', element: <LongBussesType /> },
    ]

  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);