import { Injectable } from '@nestjs/common';
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
    categoryId?: number;
  }): Promise<Product[]> {
    const products = await this.listProductRepository.listProduct({
      name: input.name,
      minPrice: input.minPrice,
      maxPrice: input.maxPrice,
      categoryId: input.categoryId,
    });
    return products;
  }
}
