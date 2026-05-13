import { Outlet as Pages } from "react-router";
import { CustomHeader } from "../Components/shared/CustomHeader";

export const RootLayout = () => {
  return (
    <div className="relative flex flex-col min-h-screen bg-linear-20 from-blue-950 to-bg-dark text-white">
      <header className="px-10 py-2 font-ma-regular">
        <CustomHeader />
      </header>
      <main className=" px-10 font-ma-regular h-screen text-gray-100">
        <Pages />
      </main>
      {/* <footer className="px-10 font-ma-regular"> Este es el FOOTER de la app</footer> */}
    </div>
  );
};
