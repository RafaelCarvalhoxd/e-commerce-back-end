export abstract class BcryptCompareContract {
  abstract compare(input: {
    plainText: string;
    hashedText: string;
  }): Promise<boolean>;
}
