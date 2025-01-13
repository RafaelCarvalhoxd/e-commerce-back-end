export abstract class DeleteSubCategoryRepositoryUseCase {
  abstract deleteSubCategory(input: { id: number }): Promise<void>;
}
