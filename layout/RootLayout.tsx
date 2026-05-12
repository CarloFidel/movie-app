import React from "react";
import { Outlet as Pages } from "react-router";
import { CustomHeader } from "../Components/shared/CustomHeader";

export const RootLayout = () => {
  return (
    <>
      <header className="px-10">
        <CustomHeader/>
      </header>
      <main className="px-10">
        <Pages />
      </main>
      <footer className="px-10"> Este es el FOOTER de la app</footer>
    </>
  );
};
