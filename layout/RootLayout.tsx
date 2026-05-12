import React from "react";
import { Outlet as Pages } from "react-router";

export const RootLayout = () => {
  return (
    <>
      <header> Este es el header de la app</header>
      <main>
        <Pages />
      </main>
      <footer> Este es el FOOTER de la app</footer>
    </>
  );
};
