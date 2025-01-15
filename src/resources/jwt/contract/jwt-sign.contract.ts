export abstract class JwtSignContract {
  abstract sign(payload: unknown): Promise<{ token: string }>;
}
