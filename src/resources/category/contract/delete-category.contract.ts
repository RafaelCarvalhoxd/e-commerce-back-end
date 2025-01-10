export abstract class DeleteCategoryRepositoryContract {
  abstract deleteCategory(input: { id: number }): Promise<void>;
}
