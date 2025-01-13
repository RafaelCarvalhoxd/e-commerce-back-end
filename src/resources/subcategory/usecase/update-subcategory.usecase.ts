import { SubCategory } from 'src/resources/subcategory/entity/subcategory.entity';

export abstract class UpdateSubCategoryRepositoryUseCase {
  abstract updateSubCategory(input: {
    id: number;
    name?: string;
    categoryId?: number;
  }): Promise<SubCategory>;
}
