import { Category } from 'src/resources/category/entity/category.entity';

export class SubCategory {
  id: number;
  name: string;
  category: Category;
  createdAt: Date;
  updatedAt?: Date;

  constructor(id: number, name: string) {
    this.id = id;
    this.name = name;
  }
}
