import { User as IUser, Users } from "@domain/entities/user.entity";
import { User } from "@infra/data/mongo/models/user.model";

export const mapperToUser = (user: User): IUser => {
  return {
    id: user.id,
    name: user.name,
    email: user.email,
    password: user.password,
    active: user.active,
    phone: user.phone,
    avatar: user.avatar,
    roles: user.roles,
    created_at: user.createdAt,
    updated_at: user.updatedAt,
  };
};

export const mapperToUsers = (users: User[]): Users => {
  return users.map((user) => mapperToUser(user));
};
