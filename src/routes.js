import { createBrowserRouter, Navigate } from "react-router-dom";
import App from "./App";
import Home from "./pages/home/Home";
import ContentCard from "./components/contentCard/ContentCard";
import Explore from "./components/explore/Explore";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Navigate to="/home" replace />,  // Redirect to /home immediately
  },
  {
    path: "/",
    element: <App />,
    // errorElement: <ErrorPage />,
    children: [
      {
        // index:true,
        path: "home",
        element: <Home />,
        children: [
          {
            // index:true,
            path: "explore",
            element: <Explore/>,
          },
          {
            index:true,
            element: <ContentCard />,
          },
        ]
      },
    //   {
    //     path: "about",
    //     element: <About />,
    //   },
    //   {
    //     path: "contact",
    //     element: <Contact />,
    //   },
    ],
  },
]);

export default router;
