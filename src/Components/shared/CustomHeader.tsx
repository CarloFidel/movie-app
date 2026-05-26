import {
  IoMoon,
  IoPersonOutline,
  IoSearchOutline,
  IoSunnyOutline,
} from "react-icons/io5";
import { ThemeContext } from "../../contexts/themes/ContextTheme";
import { use, useState } from "react";
import { useNavigate } from "react-router";
import { AuthContext } from "../../contexts/user/AuthContext";

export const CustomHeader = () => {
  const [isSearchBarOpen, setIsSearchBarOpen] = useState(false);

  const contextTheme = use(ThemeContext);
  if (!contextTheme) throw new Error("Problemas con el ThemeProvider");
  const { theme, setTheme } = contextTheme;

  const contextUser = use(AuthContext);
  if (!contextUser) throw new Error("Problemas con el UserProvider");

  const handleToogleClick = (theme: string) => {
    setTheme(theme);
  };

  const navigate = useNavigate();
  const handleClickNavigate = (path: string) => {
    // if(user === null && path !== '/') return navigate("/register");

    navigate(`/${path}`);
  };

  const handleToogleSearchIcon = () => {
    setIsSearchBarOpen((prev) => !prev);
  };

  return (
    <>
      <section className="flex flex-row justify-between w-full items-center ">
        <nav className="flex flex-row gap-10 items-center">
          <h1 className="font-ma-medium text-primary-500 text-4xl cursor-pointer">
            <p onClick={() => navigate("/")}>CINEMATE</p>
          </h1>
          <ul className="flex flex-row gap-10 font-ma-regular ">
            <li
              className="active:scale-95 hover:cursor-pointer transition-all duration-100"
              onClick={() => handleClickNavigate("/")}
            >
              Inicio
            </li>
            <li
              className="active:scale-95 hover:cursor-pointer transition-all duration-100"
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
            onClick={handleToogleSearchIcon}
          />
          {isSearchBarOpen && (
            <input
              type="text"
              placeholder="Buscar..."
              autoFocus
              className="border border-gray-400 text-sm font-ma-light dark:border-gray-700 px-4 py-1 rounded-2xl outline-none backdrop-blur bg-white/5"
            />
          )}
          <IoPersonOutline
            size={18}
            className=" hover:cursor-pointer active:scale-90 transition-all duration-100"
          />
        </div>
      </section>
    </>
  );
};
