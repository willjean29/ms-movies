import { inject, injectable } from "tsyringe";

export interface TokenPayload {
  iat: number;
  exp: number;
  sub: string;
}

export interface ITokenAdapter {
  sign(payload: Record<string, string>, secretKey: string, expiresIn: string): string;
  verify(token: string, secretKey: string): TokenPayload;
}

@injectable()
export class TokenAdapter implements ITokenAdapter {
  constructor(
    @inject("TokenAdapter")
    private tokenAdapter: ITokenAdapter
  ) {}
  sign(payload: Record<string, string>, secretKey: string, expiresIn: string): string {
    return this.tokenAdapter.sign(payload, secretKey, expiresIn);
  }
  verify(token: string, secretKey: string): TokenPayload {
    return this.tokenAdapter.verify(token, secretKey);
  }
}
