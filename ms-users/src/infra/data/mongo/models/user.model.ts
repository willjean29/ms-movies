import { Document, Model, Schema, model } from "mongoose";
import { UserRoles } from "src/domain/entities/roles.entity";

export interface User extends Document {
  id: string;
  name: string;
  email: string;
  password: string;
  phone?: string;
  avatar?: string;
  role: string;
  active: boolean;
}

const userSchema = new Schema<User>(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    phone: {
      type: String,
      required: false,
    },
    avatar: {
      type: String,
      required: false,
    },
    role: {
      type: String,
      enum: Object.values(UserRoles),
      default: UserRoles.User,
      required: true,
    },
    active: {
      type: Boolean,
      required: true,
    },
  },
  { timestamps: true }
);

export const UserModel: Model<User> = model<User>("user", userSchema);
