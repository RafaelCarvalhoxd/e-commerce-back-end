export abstract class DeleteCategoryContract {
  abstract deleteCategory(input: { id: number }): Promise<void>;
}
