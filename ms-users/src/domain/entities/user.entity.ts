import { UserRoles } from "@domain/entities/enums/roles";

export interface UserEntity {
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

export type UsersEntity = UserEntity[];
