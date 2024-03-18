import { Document, Model, Schema, model } from "mongoose";
import { UserRoles } from "../../../../domain/entities/roles.entity";

export interface User extends Document {
  id: string;
  name: string;
  email: string;
  password: string;
  phone?: string;
  avatar?: string;
  roles: UserRoles[];
  active?: boolean;
  createdAt: Date;
  updatedAt?: Date;
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
    roles: {
      type: [String],
      enum: UserRoles,
      default: [UserRoles.User],
      required: true,
    },
    active: {
      type: Boolean,
      required: true,
      default: false,
    },
  },
  { timestamps: true }
);

export const UserModel: Model<User> = model<User>("user", userSchema);
