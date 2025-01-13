import { SubCategory } from 'src/resources/subcategory/entity/subcategory.entity';

export abstract class UpdateSubCategoryUseCase {
  abstract updateSubCategory(input: {
    id: number;
    name?: string;
    categoryId?: number;
  }): Promise<SubCategory>;
}
