import { CreateUser } from "@domain/entities/create-user.entity";
import { User } from "@domain/entities/user.entity";

export interface UserDatasource {
  // findAll(): Promise<User[]>;
  // findByName(name: string): Promise<User | null>;
  // findByEmail(email: string): Promise<User | null>;
  // findById(userId: string): Promise<User | null>;
  create(data: CreateUser): Promise<User>;
  // save(data: User): Promise<User>;
  // remove(userId: string): Promise<void>;
}
