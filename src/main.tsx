import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider, Route } from "react-router-dom";
import Overview from "./components/overview";
import Root from "./routes/root";

import "./index.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    // children: [
    //   // {
    //   //   index: true,
    //   //   element: <div>Hello world!</div>,
    //   //   // element: <Overview />,
    //   // },
    //   // {
    //   //   path: "lessons",
    //   //   element: <Lessons />,
    //   // },
    // ],
  },
]);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
