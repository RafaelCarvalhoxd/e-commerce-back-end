import { Pagination } from 'src/common/pagination/pagination.common';
import { Product } from 'src/resources/product/entity/product.entity';

export abstract class ListProductUseCase {
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
  }): Promise<Pagination<Product>>;
}
