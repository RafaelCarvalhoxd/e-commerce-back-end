import { Category } from 'src/resources/category/entity/category.entity';

export abstract class CreateCategoryUseCase {
  abstract createCategory(input: { name: string }): Promise<Category>;
}
