import { IoFilmOutline, IoTvOutline, IoPersonOutline, IoLogOutOutline } from "react-icons/io5";
import  userImage  from "../assets/user.jpg";

export const Profile = () => {
  return (
    <>
      <section className="w-full flex flex-col items-left justify-center py-10 px-5">
        <nav className="flex flex-col items-start justify-start w-fit  px-4 border-r border-gray-300">
          <ul className="flex flex-col items-start justify-start gap-8">
            <li 
            className="flex flex-row items-center gap-8">
              <div> 
                <img
                  src={userImage}
                  alt="Foto de perfil"
                  className="rounded-full w-16 h-16 object-cover border border-gray-300"
                />
              </div>
              <p>Julián González</p>
            </li>
            <li 
            className="flex flex-row items-center gap-2 mt-10">
              <IoPersonOutline />
              <p>Datos Personales</p>
            </li>
            <li className="flex flex-row items-center gap-2">
              <IoFilmOutline />
              <p>Películas favoritas</p>
            </li>
            <li className="flex flex-row items-center gap-2">
              <IoTvOutline />
              <p>Series de TV favoritas</p>
            </li>
            <li className="flex flex-row items-center gap-2">
              <IoFilmOutline />
              <p>Animes favoritos</p>
            </li>
            <li className="flex flex-row items-center gap-2 mt-40 font-ma-light text-[12px]">
              <IoLogOutOutline />
              <p>Logout</p>
            </li>
          </ul>
        </nav>
      </section>
    </>
  );
};
