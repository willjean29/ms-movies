import { UserDatasource } from "src/domain/datasources/user.datasource";
import { UserModel } from "../data/mongo/models/user.model";
import { CreateUser } from "src/domain/entities/create-user.entity";

export class MongoUserDatasource implements UserDatasource {
  async create(data: CreateUser): Promise<any> {
    const model = new UserModel({ data });
    const user = await model.save();
    console.log({ user });
    return user;
  }
}
