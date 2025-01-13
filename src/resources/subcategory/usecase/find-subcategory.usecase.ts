import { SubCategory } from 'src/resources/subcategory/entity/subcategory.entity';

export abstract class FindSubCategoryUseCase {
  abstract findSubCategory(input: {
    id?: number;
    name?: string;
  }): Promise<SubCategory>;
}
