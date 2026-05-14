import { createBrowserRouter } from "react-router";
import { RootLayout } from "../layout/RootLayout";

import { RegisterView } from "../pages/RegisterView";
import { Profile } from "../pages/Profile";
import { Home } from "../pages/Home";
import { Favorite } from "../pages/Favorite";
import { Descover } from "../pages/Descover";
import { Detail } from "../pages/Detail";

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
        children: [
          { path: "/profile/favorites_personal_data", element: <></> },
          { path: "/profile/favorites_movies", element: <></> },
          { path: "/profile/favorites_tvseries", element: <></> },
          { path: "/profile/favorites_animes", element: <></> },
        ],
      },

      {
        path: "/favorite",
        element: <Favorite />,
      },

      {
        path: "/discover",
        element: <Descover />,
      },

      {
        path: "/detail/:id",
        element: <Detail />,
      },
    ],
  },
]);
