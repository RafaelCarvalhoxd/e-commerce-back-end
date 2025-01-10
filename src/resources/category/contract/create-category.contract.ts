import { Category } from 'src/resources/category/entity/category.entity';

export abstract class CreateCategoryContractRepository {
  abstract createCategory(input: { name: string }): Promise<Category>;
}
