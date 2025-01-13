import { SubCategory } from 'src/resources/subcategory/entity/subcategory.entity';

export abstract class CreateSubCategoryRepositoryContract {
  abstract createSubCategory(input: {
    name: string;
    categoryId: number;
  }): Promise<SubCategory>;
}
