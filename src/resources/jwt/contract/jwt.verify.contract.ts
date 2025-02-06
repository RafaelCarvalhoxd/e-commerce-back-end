export abstract class JwtVerifyContract {
  abstract verify(token: string, secret: string): Promise<unknown>;
}
