import LoadingComponent from "../../Components/shared/LoadingComponent";
import { useGetUserData } from "../../hooks/useGetUserData";
import userImage from "../../assets/user.jpg";

const PersonalData = () => {

  const { user, isAdmin } = useGetUserData();

  const fullName = user?.fullName;
  const email = user?.email;


  if (!user) return <LoadingComponent />;

  return (
    <section className="flex flex-row w-fit gap-20 justify-center items-center bg-primary-300/30 backdrop-blur-md dark:bg-gray-800/20 rounded-xl shadow-md p-10 border border-gray-200 dark:border-gray-700">
      <div className="">
        <h2 className="text-2xl font-bold mb-6 text-gray-800 dark:text-white">
          Datos personales
        </h2>
        <div className="space-y-4">
          <div>
            <span className="block text-gray-500 dark:text-gray-400 text-sm">
              Nombre
            </span>
            <span className="font-medium text-gray-900 dark:text-white">
              {fullName}
            </span>
          </div>
          <div>
            <span className="block text-gray-500 dark:text-gray-400 text-sm">
              Email
            </span>
            <span className="font-medium text-gray-900 dark:text-white">
              {email}
            </span>
          </div>
          <div>
            <span className="block text-gray-500 dark:text-gray-400 text-sm">
              Roles
            </span>
            {isAdmin && (
              <p className="font-medium text-gray-900 dark:text-white">Admin</p>
            )}
          </div>
        </div>
      </div>
      <div>
        <img
          src={user?.avatarUrl || userImage}
          alt="Profile"
          className="w-32 h-32 mb-10 rounded-full mx-auto border border-gray-400 dark:border-gray-600"
        />
      </div>
    </section>
  );
};

export default PersonalData;
