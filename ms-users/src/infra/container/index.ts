import { container } from "tsyringe";
import { IUserRepository } from "@domain/repositories/user.repository";
import { IUserDatasource } from "@domain/datasources/user.datasource";
import { UserRepository } from "@infra/repositories/user.repository";
import { MongoUserDatasource } from "@infra/datasources/mongo-user.datasource";
import { BcryptAdapter, IHashAdapter } from "@shared/adapters/hash";
import { IIdAdapter, MongoIdAdapter } from "@shared/adapters/identifier";
import { ITokenAdapter, JwtAdapter } from "@shared/adapters/token";

container.registerSingleton<ITokenAdapter>("TokenAdapter", JwtAdapter);
container.registerSingleton<IIdAdapter>("IdAdapter", MongoIdAdapter);
container.registerSingleton<IHashAdapter>("HashAdapter", BcryptAdapter);
container.registerSingleton<IUserDatasource>("UserDatasource", MongoUserDatasource);
container.registerSingleton<IUserRepository>("UserRepository", UserRepository);
