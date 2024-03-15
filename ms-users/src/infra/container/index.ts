import { container } from "tsyringe";
import { UserRepository as IUserRepository } from "../../domain/repositories/user.repository";
import { UserDatasource as IUserDatasource } from "../../domain/datasources/user.datasource";
import { UserRepository } from "../../infra/repositories/user.repository";
import { MongoUserDatasource } from "../../infra/datasources/mongo-user.datasource";

container.registerSingleton<IUserDatasource>("UserDatasource", MongoUserDatasource);
container.registerSingleton<IUserRepository>("UserRepository", UserRepository);
