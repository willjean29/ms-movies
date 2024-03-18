import { IUserDatasource } from "@domain/datasources/user.datasource";
import { UserModel } from "@infra/data/mongo/models/user.model";
import { CreateUserDto } from "@domain/entities/dtos/create-user.dto";
import { UserEntity, UsersEntity } from "@domain/entities/user.entity";
import { mapperToUser, mapperToUsers } from "@infra/data/mongo/utils/mapper";
export class MongoUserDatasource implements IUserDatasource {
  async create(data: CreateUserDto): Promise<UserEntity> {
    const model = new UserModel(data);
    const user = await model.save();
    return mapperToUser(user);
  }

  async findById(userId: string): Promise<UserEntity | null> {
    const user = await UserModel.findById(userId);
    if (!user) {
      return null;
    }
    return mapperToUser(user);
  }

  async findByEmail(email: string): Promise<UserEntity | null> {
    const user = await UserModel.findOne({ email: email });
    if (!user) {
      return null;
    }
    return mapperToUser(user);
  }
  async findAll(): Promise<UsersEntity> {
    const users = await UserModel.find();
    return mapperToUsers(users);
  }
}
