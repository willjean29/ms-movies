import { container } from "tsyringe";
import { IUserRepository } from "@domain/repositories/user.repository";
import { IUserDatasource } from "@domain/datasources/user.datasource";
import { UserRepository } from "@infra/repositories/user.repository";
import { MongoUserDatasource } from "@infra/datasources/mongo-user.datasource";
import { IHashAdapter } from "@shared/adapters/hash/hash.adapter";
import { BcryptAdapter } from "@shared/adapters/hash/bcrypt.adapter";

container.registerSingleton<IHashAdapter>("HashAdapter", BcryptAdapter);
container.registerSingleton<IUserDatasource>("UserDatasource", MongoUserDatasource);
container.registerSingleton<IUserRepository>("UserRepository", UserRepository);
