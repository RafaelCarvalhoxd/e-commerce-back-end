export abstract class AuthUsecase {
  abstract execute(input: {
    email: string;
    password: string;
  }): Promise<{ token: string }>;
}
