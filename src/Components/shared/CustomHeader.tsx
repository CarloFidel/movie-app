import { IoMoon, IoPersonOutline, IoSunnyOutline } from "react-icons/io5";
import { useNavigate } from "react-router";
import { useTheme } from "./hooks/useTheme";
import userImage from "../../assets/user.jpg";
import { AuthContext } from "../../contexts/Auth/AuthContext";
import { use } from "react";

export const CustomHeader = () => {
  const { theme, handleToogleClick } = useTheme();
  const authcontext = use(AuthContext);
  const { isAuth } = authcontext!;

  const navigate = useNavigate();

  const handleClickNavigate = (path: string) => {
    navigate(`/${path}`);
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
              onClick={() =>
                handleClickNavigate("profile/favorites_personal_data")
              }
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
          {!isAuth ? (
            <IoPersonOutline
              size={18}
              className=" hover:cursor-pointer active:scale-90 transition-all duration-100"
            />
          ) : (
            <img
              src={userImage}
              alt="Profile"
              className="w-7 h-7 rounded-full border border-gray-400 dark:border-gray-600"
            />
          )}
        </div>
      </section>
    </>
  );
};
