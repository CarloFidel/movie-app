import { createBrowserRouter } from "react-router";
import { RootLayout } from "../layout/RootLayout";

import { RegisterView } from "../pages/RegisterView";
import { Profile } from "../pages/Profile";
import { Home } from "../pages/Home";
import { Favorite } from "../pages/Favorite";
import { Descover } from "../pages/Descover";
import { Detail } from "../pages/Detail";
import RouteProtecter from "../Components/shared/RouteProtecter";
import PersonalData from "../pages/profile/PersonalData";
import FavoritesMovies from "../pages/profile/FavoritesMovies";
import ListUsers from "../pages/profile/ListUsers";

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
        element: (
          <RouteProtecter>
            <Profile />
          </RouteProtecter>
        ),
        children: [
          {
            path: "/profile/favorites_personal_data",
            element: <PersonalData />,
          },
          { path: "/profile/favorites_movies", element: <FavoritesMovies /> },
          { path: "/profile/users", element: <ListUsers /> },
        ],
      },

      {
        path: "/favorite",
        element: (
          <RouteProtecter>
            <Favorite />
          </RouteProtecter>
        ),
      },

      {
        path: "/discover",
        element: (
          <RouteProtecter>
            <Descover />
          </RouteProtecter>
        ),
      },

      {
        path: "/detail/:id",
        element: (
          <RouteProtecter>
            <Detail />
          </RouteProtecter>
        ),
      },
    ],
  },
]);
