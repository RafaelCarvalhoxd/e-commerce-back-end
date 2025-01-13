import { SubCategory } from 'src/resources/subcategory/entity/subcategory.entity';

export abstract class FindSubCategoryRepositoryUseCase {
  abstract findSubCategory(input: {
    id?: number;
    name?: string;
  }): Promise<SubCategory>;
}
