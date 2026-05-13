import {
  IoMoon,
  IoNotificationsOutline,
  IoPersonOutline,
  IoSearchOutline,
  IoSunnyOutline,
} from "react-icons/io5";
import { ThemeContext } from "../../contexts/themes/ContextTheme";
import { use } from "react";
import { useNavigate } from "react-router";

export const CustomHeader = () => {
  const contextTheme = use(ThemeContext);
  if (!contextTheme) throw new Error("Problemas con el ThemeProvider");

  const { theme, setTheme } = contextTheme;

  const handleToogleClick = (theme: string) => {
    setTheme(theme);
  };

  const navigate = useNavigate();

  const handleClickNavigate = (path: string) => {
    navigate(`/${path}`);
  };

  return (
    <>
      <section className="flex flex-row justify-between w-full items-center ">
        <nav className="flex flex-row gap-10 items-center">
          <h1 className="font-ma-medium text-primary-500 text-4xl">
            <a href="/">CINEMATE</a>
          </h1>
          <ul className="flex flex-row gap-10 font-ma-regular ">
            <li className="active:scale-95 hover:cursor-pointer transition-all duration-100"
              onClick={() => handleClickNavigate("")}
            >
              Inicio
            </li>
            <li className="active:scale-95 hover:cursor-pointer transition-all duration-100"
              onClick={() => handleClickNavigate("discover")}
            >
              Descubrir
            </li>
            <li
              className="active:scale-95 hover:cursor-pointer transition-all duration-100"
              onClick={() => handleClickNavigate("favorite")}
            >
              Favoritos
            </li>
            <li
              className="active:scale-95 hover:cursor-pointer transition-all duration-100"
              onClick={() => handleClickNavigate("profile")}
            >
              Perfil
            </li>
          </ul>
        </nav>
        <div className="flex flex-row justify-center items-center gap-5">
          {theme === "light" ? (
            <IoMoon
              size={16}
              className=" hover:cursor-pointer active:scale-90 transition-all duration-100"
              onClick={() => handleToogleClick("dark")}
            />
          ) : (
            <IoSunnyOutline
              size={20}
              className=" hover:cursor-pointer active:scale-90 transition-all duration-100"
              onClick={() => handleToogleClick("light")}
            />
          )}
          <IoSearchOutline
            size={18}
            className=" hover:cursor-pointer active:scale-90 transition-all duration-100"
          />
          <IoNotificationsOutline
            size={20}
            className=" hover:cursor-pointer active:scale-90 transition-all duration-100"
          />
          <IoPersonOutline
            size={18}
            className=" hover:cursor-pointer active:scale-90 transition-all duration-100"
          />
        </div>
      </section>
    </>
  );
};
