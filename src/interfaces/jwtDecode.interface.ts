import type { JwtPayload } from "jwt-decode";

export interface PersonalDataToken extends JwtPayload {
  email: string;
  exp: number;
  iat: number;
  id: string;
}
