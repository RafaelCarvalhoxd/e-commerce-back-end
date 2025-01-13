import { SubCategory } from 'src/resources/subcategory/entity/subcategory.entity';

export abstract class ListSubCategoryUseCase {
  abstract listSubCategory(input: {
    ids: number[];
    name?: string[];
    categoryIds: number[];
  }): Promise<SubCategory[]>;
}
