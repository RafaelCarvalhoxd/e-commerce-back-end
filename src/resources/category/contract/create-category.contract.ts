import { Category } from 'src/resources/category/entity/category.entity';

export abstract class CreateCategoryRepositoryContract {
  abstract createCategory(input: { name: string }): Promise<Category>;
}
