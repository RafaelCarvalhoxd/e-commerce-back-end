export abstract class DeleteSubCategoryUseCase {
  abstract deleteSubCategory(input: { id: number }): Promise<void>;
}
