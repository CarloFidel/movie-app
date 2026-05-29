import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router";
import { router } from "./router/router";

import { ThemeProvider } from "./contexts/themes/ThemeProvider";
import { AuthProvider } from "./contexts/Auth/AuthProvider";
import { FavoriteMoviesProvider } from "./contexts/movies/FavoriteMoviesProvider";
// import App from './App.tsx'

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ThemeProvider>
      <AuthProvider>
        <FavoriteMoviesProvider>
          <RouterProvider router={router} />
        </FavoriteMoviesProvider>
      </AuthProvider>
    </ThemeProvider>
  </StrictMode>,
);
