export abstract class DeleteCartRepositoryContract {
  abstract execute(input: {
    userId: number;
    productId: number;
  }): Promise<boolean>;
}
