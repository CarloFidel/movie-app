import { createContext } from "react";
import type { User } from "../../interfaces/user.interface";

interface Props {
  isAuth: boolean;
  token: string | null;
  user: User | null;
  login: (token: string, user: User) => void;
  logout: () => void;
}

export const AuthContext = createContext<Props | null>(null);
