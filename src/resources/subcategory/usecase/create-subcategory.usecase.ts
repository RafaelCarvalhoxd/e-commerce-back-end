import { SubCategory } from 'src/resources/subcategory/entity/subcategory.entity';

export abstract class CreateSubCategoryUseCase {
  abstract createSubCategory(input: {
    name: string;
    categoryId: number;
  }): Promise<SubCategory>;
}
