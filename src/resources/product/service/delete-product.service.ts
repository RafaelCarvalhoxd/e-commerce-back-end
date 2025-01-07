import { Injectable, NotFoundException } from '@nestjs/common';
import { DeleteProductRepositoryContract } from 'src/resources/product/contract/delete-product.contract';
import { FindProductRepositoryContract } from 'src/resources/product/contract/find-product.contract';
import { DeleteProductUseCase } from 'src/resources/product/usecase/delete-product.usecase';

@Injectable()
export class DeleteProductService implements DeleteProductUseCase {
  constructor(
    private readonly deleteProductRepository: DeleteProductRepositoryContract,
    private readonly findProductRepository: FindProductRepositoryContract,
  ) {}

  async deleteProduct(input: { id: number }): Promise<void> {
    const product = await this.findProductRepository.findProduct({
      id: input.id,
    });
    if (!product) throw new NotFoundException('Product not found!');
    await this.deleteProductRepository.deleteProduct({ id: input.id });
  }
}
