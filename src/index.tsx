import React from 'react';
import ReactDOM from 'react-dom/client';
import './base.css';
import './index.css';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Weddings from './routes/Weddings';
import Contact from './routes/Contact';
import Home from './routes/Home';

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
    path: "about",
    element: <Contact />,
  },
]);

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
