import { Outlet, useNavigate } from "react-router";
import { IoFilmOutline, IoPersonOutline, IoLogOutOutline} from "react-icons/io5";

import userImage from "../assets/user.jpg";
import { useGetUserData } from "../hooks/useGetUserData";
import LoadingComponent from "../Components/shared/LoadingComponent";


export const Profile = () => {
  const navigate = useNavigate();
  const { user, isAdmin, logout } = useGetUserData();

  if (!user) return <LoadingComponent />;
  return (
    <section className="flex flex-row gap-1 w-full">
      <article className="min-w-fit flex flex-col items-left justify-center py-10 px-5">
        <nav className="flex flex-col items-start justify-start w-fit  px-4 border-r border-gray-300 dark:border-gray-600">
          <ul className="flex flex-col items-start justify-start gap-8">
            <li className="flex flex-row items-center gap-8">
              <div>
                <img
                  src={userImage}
                  alt="Foto de perfil"
                  className="rounded-full w-16 h-16 object-cover border border-gray-300"
                />
              </div>
              <p>{user?.fullName}</p>
            </li>
            <li
              className="flex flex-row items-center gap-2 mt-10 hover:cursor-pointer"
              onClick={() => navigate("/profile/favorites_personal_data")}
            >
              <IoPersonOutline />
              <p>Datos Personales</p>
            </li>
            <li
              className="flex flex-row items-center gap-2 hover:cursor-pointer"
              onClick={() => navigate("/profile/favorites_movies")}
            >
              <IoFilmOutline />
              <p>Películas favoritas</p>
            </li>

            {isAdmin && (
              <li
                className="flex flex-row items-center gap-2 hover:cursor-pointer"
                onClick={() => navigate("/profile/users")}
              >
                <IoFilmOutline />
                <p>Usuarios en la app</p>
              </li>
            )}
            <li
              className="flex flex-row items-center gap-2 mt-40 font-ma-light text-[12px] hover:cursor-pointer"
              onClick={logout}
            >
              <IoLogOutOutline />
              <p>Logout</p>
            </li>
          </ul>
        </nav>
      </article>
      <article className="relative flex flex-row justify-center items-center w-full">
        <Outlet />
      </article>
    </section>
  );
};
