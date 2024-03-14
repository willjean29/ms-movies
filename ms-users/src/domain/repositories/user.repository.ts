import { User } from "../entities/user.entity";

export interface UserRepository {
  findAll(): Promise<User[]>;
  findByName(name: string): Promise<User | null>;
  findByEmail(email: string): Promise<User | null>;
  findById(userId: string): Promise<User | null>;
  create(data: User): Promise<User>;
  save(data: User): Promise<User>;
  remove(userId: string): Promise<void>;
}
