import { Category } from 'src/resources/category/entity/category.entity';

export abstract class ListCategoryUseCase {
  abstract listCategory(input: { name?: string }): Promise<Category[]>;
}
