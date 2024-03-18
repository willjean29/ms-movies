import { HashAdapter } from "@shared/adapters/hash/hash.adapter";
import { hash, compare } from "bcrypt";

export class BcryptAdapter implements HashAdapter {
  generateHash(payload: string): Promise<string> {
    return hash(payload, 10);
  }
  compareHash(payload: string, hashed: string): Promise<boolean> {
    return compare(payload, hashed);
  }
}
