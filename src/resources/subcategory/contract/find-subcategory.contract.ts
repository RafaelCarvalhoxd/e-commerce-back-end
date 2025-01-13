import { SubCategory } from 'src/resources/subcategory/entity/subcategory.entity';

export abstract class FindSubCategoryRepositoryContract {
  abstract findSubCategory(input: {
    id?: number;
    name?: string;
  }): Promise<SubCategory>;
}
