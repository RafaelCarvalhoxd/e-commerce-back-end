export abstract class DeleteProductUseCase {
  abstract deleteProduct(input: { id: number }): Promise<void>;
}
