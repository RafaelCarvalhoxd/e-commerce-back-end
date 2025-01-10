export abstract class DeleteCategoryContractRepository {
  abstract deleteCategory(input: { id: number }): Promise<void>;
}
