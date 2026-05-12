import { IoIosNotificationsOutline } from "react-icons/io";
import { IoPersonOutline, IoSearchOutline } from "react-icons/io5";

export const CustomHeader = () => {
  return (
    <>
      <section className="flex flex-row justify-between w-full">
        <nav className="flex flex-row gap-10">
          <h1>CINEMATE</h1>
          <ul className="flex flex-row gap-10 font-m">
            <li>Inicio</li>
            <li>Descubrir</li>
            <li>Favoritos</li>
            <li>Perfil</li>
          </ul>
        </nav>
        <div className="flex flex-row justify-center items-center gap-5">
          <IoSearchOutline width={"200px"} height={"200px"} />
          <IoIosNotificationsOutline width={"200px"} height={"200px"} />
          <IoPersonOutline width={"200px"} height={"200px"} />
        </div>
      </section>
    </>
  );
};
