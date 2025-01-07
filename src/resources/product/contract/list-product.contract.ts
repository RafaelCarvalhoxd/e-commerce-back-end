import { Product } from 'src/resources/product/entity/product.entity';

export abstract class ListProductRepositoryContract {
  abstract listProduct(input: {
    name?: string;
    minPrice?: number;
    maxPrice?: number;
    categoryId?: number;
    subcategoryId?: number;
  }): Promise<Product[]>;
}
