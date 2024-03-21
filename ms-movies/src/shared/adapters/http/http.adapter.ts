import { inject, injectable } from "tsyringe";

export interface StringKeyValueObject {
  [key: string]: string;
}

export interface IHttpAdapter {
  get<T>(url: string, params?: StringKeyValueObject): Promise<T>;
}

@injectable()
export class HttpAdapter implements IHttpAdapter {
  constructor(
    @inject("HttpAdapter")
    private httpProvider: IHttpAdapter
  ) {}
  get<T>(url: string, params?: StringKeyValueObject | undefined): Promise<T> {
    return this.httpProvider.get(url, params);
  }
}
