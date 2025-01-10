import { Category } from 'src/resources/category/entity/category.entity';

export abstract class ListCategoryContract {
  abstract listCategory(input: { name: string }): Promise<Category[]>;
}
