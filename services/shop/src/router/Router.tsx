import {createBrowserRouter} from "react-router-dom";
import App from "@/components/App";
import {Suspense} from "react";
import {LazyShop} from "@/pages/Shop/Shop.lazy";

const routes = [
  {
    path: '/',
    element: <App />,
    children: [

      {
        path: '/shop',
        element:  <Suspense fallback="loading..."><LazyShop /></Suspense>,
      }
    ]
  }
]

export const router = createBrowserRouter(routes);

export default routes
