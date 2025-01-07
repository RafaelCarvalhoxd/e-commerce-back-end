export abstract class DeleteProductRepositoryContract {
  abstract deleteProduct(input: { id: number }): Promise<void>;
}
