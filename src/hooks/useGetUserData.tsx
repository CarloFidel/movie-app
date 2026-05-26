import { use, useEffect, useState } from "react";
import type { User } from "../interfaces/user.interface";
import { AuthContext } from "../contexts/user/AuthContext";
import { getOnebyId } from "../services/users/actions/user-api-movieMate";
import { getUserFromJwData } from "../utility/get-user-from-token";

export const useGetUserData = () => {
  const [user, setUser] = useState<User>();

  const isAdmin = user?.roles?.includes("admin") ?? false;

  const authContext = use(AuthContext);

  const { token, logout } = authContext!;
  const { id } = getUserFromJwData(token!);

  useEffect(() => {
    const getUserById = async (id: string) => {
      const user = await getOnebyId(id, token!);
      setUser(user);
    };
    getUserById(id);
  }, [id, token]);

  return {
    user,
    isAdmin,
    logout
  };
};
