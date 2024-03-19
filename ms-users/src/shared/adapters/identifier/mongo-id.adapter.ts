import { IIdAdapter } from "@shared/adapters/identifier/id.adapter";
import { isValidObjectId } from "mongoose";

export class MongoIdAdapter implements IIdAdapter {
  validate(id: string): boolean {
    return isValidObjectId(id);
  }
}
