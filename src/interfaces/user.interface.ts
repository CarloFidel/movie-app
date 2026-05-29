export interface User {
  fullName: string;
  email: string;
  password?: string;

  avatarUrl?: string;
  id?: string;
  isActive?: boolean;
  roles?: string[];
}
