import { UserRoles } from "./roles.entity";

export interface User {
  id: string;
  name: string;
  email: string;
  password: string;
  phone?: string;
  avatar?: string;
  role: UserRoles;
  active: boolean;
  created_at: Date;
  updated_at?: Date;
}
