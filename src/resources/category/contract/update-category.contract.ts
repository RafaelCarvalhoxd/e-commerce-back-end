import { Category } from 'src/resources/category/entity/category.entity';

export abstract class UpdateCategoryContract {
  abstract updateCategory(input: {
    id: number;
    name: string;
  }): Promise<Category>;
}
