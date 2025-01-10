import { Category } from 'src/resources/category/entity/category.entity';

export abstract class FindCategoryContract {
  abstract findCategory(input: {
    id?: number;
    name?: string;
  }): Promise<Category>;
}
