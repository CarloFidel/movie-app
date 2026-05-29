import { useState } from "react";
import type { User } from "../../interfaces/user.interface";
import { AuthContext } from "./AuthContext";
import { checkTotken } from "../../utility/check-token-from-local";

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const { exist, tokenFromLocal } = checkTotken();

  const [token, setToken] = useState<string | null>(tokenFromLocal);
  const [user, setUser] = useState<User | null>(null);
  const [isAuth, setIsAuth] = useState<boolean>(exist);


  const login = (token: string, user: User) => {
    setToken(token);
    setUser(user);
    setIsAuth(true);
    localStorage.setItem("userToken", token);
  };

  const logout = () => {
    setToken(null);
    setUser(null);
    setIsAuth(false);
    localStorage.removeItem("userToken");
  };

  return (
    <AuthContext
      value={{
        //values
        isAuth,
        token,
        user,
        //methods
        login,
        logout,
      }}
    >
      {children}
    </AuthContext>
  );
};
