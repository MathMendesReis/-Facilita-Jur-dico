import {
    createBrowserRouter,
  } from "react-router-dom";
import { App } from "../app/pages/App";

 export const router = createBrowserRouter([
    {
      path: "/",
      element: <App/>,
    },
  ]);