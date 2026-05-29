import { Outlet as Pages } from "react-router";
import { use } from "react";

import { CustomHeader } from "../Components/shared/CustomHeader";
import { ThemeContext } from "../contexts/themes/ContextTheme";

export const RootLayout = () => {
  const contextTheme = use(ThemeContext);
  if (!contextTheme) throw new Error("Problemas con el ThemeProvider");

  const { theme } = contextTheme;

  return (
    <div
      className={`${theme} relative flex flex-col min-h-screen scroll-y-auto dark:bg-linear-to-tl bg-linear-to-tl from-primary-300 to-white  dark:from-indigo-950 dark:to-bg-dark transition duration-200`}
    >
      <header className="px-10 py-2 font-ma-regular dark:text-gray-400 ">
        <CustomHeader />
      </header>
      <main className="flex flex-1 flex-col items-center px-10 font-ma-regular dark:text-gray-400">
        <Pages />
      </main>
      {/* <footer className="px-10 font-ma-regular"> Este es el FOOTER de la app</footer> */}
    </div>
  );
};
