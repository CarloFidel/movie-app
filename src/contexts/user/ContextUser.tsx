import { createContext } from "react";
import type { User } from "../../interfaces/user"

interface Props {
  user: User | null;
  setUser: React.Dispatch<React.SetStateAction<User | null>>;
}

export const UserContext = createContext<Props | null>(null);