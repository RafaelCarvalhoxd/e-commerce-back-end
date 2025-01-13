export abstract class DeleteSubCategoryRepositoryContract {
  abstract deleteSubCategory(input: { id: number }): Promise<void>;
}
