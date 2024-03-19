import { inject, injectable } from "tsyringe";

export interface IHashAdapter {
  generateHash(payload: string): Promise<string>;
  compareHash(payload: string, hashed: string): Promise<boolean>;
}

@injectable()
export class HashAdapter implements IHashAdapter {
  constructor(
    @inject("HashAdapter")
    private hashAdapter: IHashAdapter
  ) {}
  async generateHash(payload: string): Promise<string> {
    return this.hashAdapter.generateHash(payload);
  }
  async compareHash(payload: string, hashed: string): Promise<boolean> {
    return this.hashAdapter.compareHash(payload, hashed);
  }
}
