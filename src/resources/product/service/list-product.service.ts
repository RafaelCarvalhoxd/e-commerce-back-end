import { Injectable } from '@nestjs/common';
import { Pagination } from 'src/common/utils/pagination.util';
import { ListProductRepositoryContract } from 'src/resources/product/contract/list-product.contract';
import { Product } from 'src/resources/product/entity/product.entity';
import { ListProductUseCase } from 'src/resources/product/usecase/list-product.usecase';

@Injectable()
export class ListProductService implements ListProductUseCase {
  constructor(
    private readonly listProductRepository: ListProductRepositoryContract,
  ) {}

  async listProduct(input: {
    name?: string;
    minPrice?: number;
    maxPrice?: number;
    categoryId?: number[];
    subcategoryId?: number[];
    page?: number;
    limit?: number;
    orderBy?: 'price' | 'name';
    orderDirection?: 'ASC' | 'DESC';
  }): Promise<Pagination<Product>> {
    const [data, total] = await this.listProductRepository.listProduct({
      name: input.name,
      minPrice: input.minPrice,
      maxPrice: input.maxPrice,
      categoryId: input.categoryId,
      subcategoryId: input.subcategoryId,
      page: input.page,
      limit: input.limit,
      orderBy: input.orderBy,
      orderDirection: input.orderDirection,
    });

    return Pagination.from(data, total, input.page, input.limit);
  }
}
