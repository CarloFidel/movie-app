import { jwtDecode } from "jwt-decode";
import type { PersonalDataToken } from "../interfaces/jwtDecode.interface";

export const getUserFromJwData = (token: string) => {
  const data = jwtDecode<PersonalDataToken>(token!);
  const { id, email } = data;

  return {
    id,
    email,
  };
};
