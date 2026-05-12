import { createBrowserRouter } from "react-router";
import { RootLayout } from "../layout/RootLayout";
import { LoginView } from "../pages/LoginView";
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
        path: "/pages/login",
        element: <LoginView />,
      },
      {
        path: "/pages/profile",
        element: <Profile />,
      },
      {
        path: "/pages/home",
        element: <Home/>,
      },
      {
        path: "/pages/favorite",
        element: <Favorite/>,
      },
      {
        path: "/pages/descover",
        element: <Descover/>,
      },
    ],
  },
]);
