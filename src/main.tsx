import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router";
import { router } from "./router/router";

import { ThemeProvider } from "./contexts/themes/ThemeProvider";
import { UserProvider } from "./contexts/user/UserProvider";
// import App from './App.tsx'

createRoot(document.getElementById("root")!).render(
  
  <StrictMode>
    <ThemeProvider>
      <UserProvider>
        <RouterProvider router={router} />
      </UserProvider>
    </ThemeProvider>
  </StrictMode>,
);
