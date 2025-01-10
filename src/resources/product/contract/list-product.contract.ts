import { Product } from 'src/resources/product/entity/product.entity';

export abstract class ListProductRepositoryContract {
  abstract listProduct(input: {
    name?: string;
    minPrice?: number;
    maxPrice?: number;
    categoryId?: number[];
    subcategoryId?: number[];
    page?: number;
    limit?: number;
    orderBy?: 'price' | 'name';
    orderDirection?: 'ASC' | 'DESC';
  }): Promise<[Product[], number]>;
}
