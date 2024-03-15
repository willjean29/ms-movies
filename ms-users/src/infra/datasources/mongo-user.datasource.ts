import { UserDatasource } from "@domain/datasources/user.datasource";
import { UserModel } from "@infra/data/mongo/models/user.model";
import { CreateUser } from "@domain/entities/create-user.entity";

export class MongoUserDatasource implements UserDatasource {
  async create(data: CreateUser): Promise<any> {
    const model = new UserModel(data);
    const user = await model.save();
    return user;
  }
}
