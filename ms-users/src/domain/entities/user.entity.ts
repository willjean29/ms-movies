import { UserRoles } from "@domain/entities/roles.entity";

export interface User {
  id: string;
  name: string;
  email: string;
  password: string;
  phone?: string;
  avatar?: string;
  roles: UserRoles[];
  active?: boolean;
  created_at: Date;
  updated_at?: Date;
}
