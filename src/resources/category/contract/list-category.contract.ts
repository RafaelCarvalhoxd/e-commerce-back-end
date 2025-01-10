import { Category } from 'src/resources/category/entity/category.entity';

export abstract class ListCategoryRepositoryContract {
  abstract listCategory(input: { name: string }): Promise<Category[]>;
}
