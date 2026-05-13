import { createBrowserRouter } from "react-router";
import { RootLayout } from "../layout/RootLayout";
import { RegisterView } from "../pages/RegisterView";
import { Profile } from "../pages/Profile";
import { Home } from "../pages/Home";
import { Favorite } from "../pages/Favorite";
import { Descover } from "../pages/Descover";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },

      {
        path: "/register",
        element: <RegisterView />,
      },

      {
        path: "/profile",
        element: <Profile />,
      },

      {
        path: "/favorite",
        element: <Favorite />,
      },

      {
        path: "/discover",
        element: <Descover />,
      },
    ],
  },
]);
