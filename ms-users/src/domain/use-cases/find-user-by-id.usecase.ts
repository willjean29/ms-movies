import { User } from "@domain/entities/user.entity";

export interface FindUserById {
  execute: (userId: string) => Promise<User | null>;
}
