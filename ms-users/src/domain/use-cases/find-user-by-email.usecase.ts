import { User } from "@domain/entities/user.entity";

export interface FindUserByEmail {
  execute: (email: string) => Promise<User | null>;
}
