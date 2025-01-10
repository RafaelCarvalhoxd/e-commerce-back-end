import { Category } from 'src/resources/category/entity/category.entity';

export abstract class CreateCategoryContract {
  abstract createCategory(input: { name: string }): Promise<Category>;
}
