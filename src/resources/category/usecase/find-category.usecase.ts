import { Category } from 'src/resources/category/entity/category.entity';

export abstract class FindCategoryUseCase {
  abstract findCategory(input: {
    id?: number;
    name?: string;
  }): Promise<Category>;
}
