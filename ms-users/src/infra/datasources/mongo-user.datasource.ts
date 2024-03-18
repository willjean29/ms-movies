import { UserDatasource } from "@domain/datasources/user.datasource";
import { UserModel } from "@infra/data/mongo/models/user.model";
import { CreateUser } from "@domain/entities/create-user.entity";
import { User as IUser, Users } from "@domain/entities/user.entity";
import { mapperToUser, mapperToUsers } from "@infra/data/mongo/utils/mapper";
export class MongoUserDatasource implements UserDatasource {
  async create(data: CreateUser): Promise<IUser> {
    const model = new UserModel(data);
    const user = await model.save();
    return mapperToUser(user);
  }

  async findById(userId: string): Promise<IUser | null> {
    const user = await UserModel.findById(userId);
    if (!user) {
      return null;
    }
    return mapperToUser(user);
  }

  async findByEmail(email: string): Promise<IUser | null> {
    const user = await UserModel.findOne({ email: email });
    if (!user) {
      return null;
    }
    return mapperToUser(user);
  }
  async findAll(): Promise<Users> {
    const users = await UserModel.find();
    return mapperToUsers(users);
  }
}
