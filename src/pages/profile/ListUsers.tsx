import { use, useEffect, useState } from "react";
import LoadingComponent from "../../Components/shared/LoadingComponent";
import { getUsersList } from "../../services/users/actions/user-api-movieMate";
import { AuthContext } from "../../contexts/Auth/AuthContext";
import type { User } from "../../interfaces/user.interface";
import { FiTrash2 } from "react-icons/fi";

const PersonalData = () => {
  const context = use(AuthContext);
  const { token } = context!;

  const [users, setUsers] = useState<User[]>([]);

  useEffect(() => {
    const getUsers = async () => {
      const users: User[] = await getUsersList(token!);
      setUsers(users);
    };
    getUsers();
  }, [token]);

  if (!users || users.length === 0) return <LoadingComponent />;

  return (
    <section className="flex flex-row flex-wrap w-full gap-8 justify-center items-center bg-primary-300/30 backdrop-blur-md dark:bg-gray-800/20 rounded-xl shadow-md p-10 border border-gray-200 dark:border-gray-700">
      {users.map((user) => (
        <article
          key={user.id || user.email}
          className="flex flex-row w-full items-center justify-between gap-15 bg-white dark:bg-gray-900 rounded-lg shadow p-6 border border-gray-200 dark:border-gray-700"
        >
          <div
            key={user.id || user.email}
            className="flex flex-col items-start bg-white dark:bg-gray-900 rounded-lg"
          >
            <span className="text-lg font-bold text-gray-800 dark:text-white mb-2">
              {user.fullName}
            </span>
            <span className="text-sm text-gray-600 dark:text-gray-300">
              {user.email}
            </span>
          </div>
          <FiTrash2 size={24} onClick={() => console.log(`Delete user ${user.id}`)} className="hover:cursor-pointer active:scale-95 transition duration-75" />
        </article>
      ))}
    </section>
  );
};

export default PersonalData;
