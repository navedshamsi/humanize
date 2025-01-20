import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import Home from "./pages/home/Home";



const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    // errorElement: <ErrorPage />,
    children: [
      {
        index:true,
        path: "/",
        element: <Home />,
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
