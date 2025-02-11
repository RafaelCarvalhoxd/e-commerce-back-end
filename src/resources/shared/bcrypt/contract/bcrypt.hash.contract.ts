export abstract class BcryptHashContract {
  abstract hash(input: { plainText: string; salt: number }): Promise<string>;
}
