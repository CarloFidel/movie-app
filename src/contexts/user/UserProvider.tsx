import { useState } from "react";
import type { User } from "../../interfaces/user.interface"
import { UserContext } from "./ContextUser";

export const UserProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);

  return <UserContext value={{user, setUser}}>{children}</UserContext>;
};
