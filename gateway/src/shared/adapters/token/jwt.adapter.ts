import { sign, verify } from "jsonwebtoken";
import { TokenPayload, ITokenAdapter } from "@shared/adapters/token/token.adapter";

export class JwtAdapter implements ITokenAdapter {
  sign(payload: Record<string, string>, secretKey: string, expiresIn: string): string {
    const token = sign(payload, secretKey, {
      expiresIn,
    });
    return token;
  }
  verify(token: string, secretKey: string): TokenPayload {
    const decodedToken = verify(token, secretKey);
    return decodedToken as TokenPayload;
  }
}
