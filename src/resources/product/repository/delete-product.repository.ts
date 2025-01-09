import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { DeleteProductRepositoryContract } from 'src/resources/product/contract/delete-product.contract';
import { ProductModel } from 'src/resources/product/model/product.model';
import { Repository } from 'typeorm';

@Injectable()
export class DeleteProductRepository
  implements DeleteProductRepositoryContract
{
  constructor(
    @InjectRepository(ProductModel)
    private readonly repository: Repository<ProductModel>,
  ) {}

  async deleteProduct(input: { id: number }): Promise<void> {
    await this.repository.delete({
      id: input.id,
    });
  }
}
