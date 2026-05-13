import {
  IoMoon,
  IoNotificationsOutline,
  IoPersonOutline,
  IoSearchOutline,
  IoSunnyOutline,
} from "react-icons/io5";

export const CustomHeader = () => {
  return (
    <>
      <section className="flex flex-row justify-between w-full items-center ">
        <nav className="flex flex-row gap-10 items-center">
          <h1 className="font-ma-medium text-primary-500 text-4xl">CINEMATE</h1>
          <ul className="flex flex-row gap-10 font-ma-regular ">
            <li className="active:scale-95 hover:cursor-pointer transition-all duration-100">
              Inicio
            </li>
            <li className="active:scale-95 hover:cursor-pointer transition-all duration-100">
              Descubrir
            </li>
            <li className="active:scale-95 hover:cursor-pointer transition-all duration-100">
              Favoritos
            </li>
            <li className="active:scale-95 hover:cursor-pointer transition-all duration-100">
              Perfil
            </li>
          </ul>
        </nav>
        <div className="flex flex-row justify-center items-center gap-5">
          <IoMoon
            size={16}
            className=" hover:cursor-pointer active:scale-90 transition-all duration-100"
          />
          <IoSunnyOutline
            size={20}
            className=" hover:cursor-pointer active:scale-90 transition-all duration-100"
          />
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
