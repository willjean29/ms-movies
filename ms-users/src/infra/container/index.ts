import { container } from "tsyringe";
import { UserRepository as IUserRepository } from "@domain/repositories/user.repository";
import { UserDatasource as IUserDatasource } from "@domain/datasources/user.datasource";
import { UserRepository } from "@infra/repositories/user.repository";
import { MongoUserDatasource } from "@infra/datasources/mongo-user.datasource";
import { HashAdapter as IHashAdapter } from "@shared/adapters/hash/hash.adapter";
import { BcryptAdapter } from "@shared/adapters/hash/bcrypt.adapter";

container.registerSingleton<IHashAdapter>("HashAdapter", BcryptAdapter);
container.registerSingleton<IUserDatasource>("UserDatasource", MongoUserDatasource);
container.registerSingleton<IUserRepository>("UserRepository", UserRepository);
