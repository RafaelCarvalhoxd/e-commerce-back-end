export abstract class DeleteCategoryUseCase {
  abstract deleteCategory(input: { id: number }): Promise<void>;
}
