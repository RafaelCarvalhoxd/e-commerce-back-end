import { Injectable } from '@nestjs/common';
import { DeleteProductRepositoryContract } from 'src/resources/product/contract/delete-product.contract';
import { DeleteProductUseCase } from 'src/resources/product/usecase/delete-product.usecase';
import { FindProductUseCase } from 'src/resources/product/usecase/find-product.usecase';

@Injectable()
export class DeleteProductService implements DeleteProductUseCase {
  constructor(
    private readonly deleteProductRepository: DeleteProductRepositoryContract,
    private readonly findProductUseCase: FindProductUseCase,
  ) {}

  async deleteProduct(input: { id: number }): Promise<void> {
    await this.findProductUseCase.findProduct({
      id: input.id,
    });
    await this.deleteProductRepository.deleteProduct({ id: input.id });
  }
}
