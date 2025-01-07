import { Product } from 'src/resources/product/entity/product.entity';

export abstract class UpdateProductRepositoryContract {
  abstract updateProduct(input: {
    id: number;
    name?: string;
    photo?: string;
    description?: string;
    price?: number;
    categoryId?: number;
  }): Promise<Product>;
}
