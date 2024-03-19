import { inject, injectable } from "tsyringe";

export interface IIdAdapter {
  validate(id: string): boolean;
}

@injectable()
export class IdAdapter implements IIdAdapter {
  constructor(
    @inject("IdAdapter")
    private idAdapter: IIdAdapter
  ) {}
  validate(id: string): boolean {
    return this.idAdapter.validate(id);
  }
}
