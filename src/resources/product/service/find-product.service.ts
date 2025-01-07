import { Injectable, NotFoundException } from '@nestjs/common';
import { FindProductRepositoryContract } from 'src/resources/product/contract/find-product.contract';
import { Product } from 'src/resources/product/entity/product.entity';
import { FindProductUseCase } from 'src/resources/product/usecase/find-product.usecase';

@Injectable()
export class FindProductService implements FindProductUseCase {
  constructor(
    private readonly findProductRepository: FindProductRepositoryContract,
  ) {}

  async findProduct(input: { id?: number; name?: string }): Promise<Product> {
    const product = await this.findProductRepository.findProduct({
      name: input.name,
      id: input.id,
    });
    if (!product) throw new NotFoundException('Product not found!');
    return product;
  }
}
