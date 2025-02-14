import React from "react";
import ReactDOM from "react-dom/client";
import "./base.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Weddings } from "./routes/Weddings";
import { Portraits } from "./routes/Portraits";
import { About } from "./routes/About";
import { Home } from "./routes/Home";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "weddings",
    element: <Weddings />,
  },
  {
    path: "portraits",
    element: <Portraits />,
  },
  {
    path: "about",
    element: <About />,
  },
]);

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
