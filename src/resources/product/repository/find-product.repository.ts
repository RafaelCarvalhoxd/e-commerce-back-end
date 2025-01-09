import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { FindProductRepositoryContract } from 'src/resources/product/contract/find-product.contract';
import { Product } from 'src/resources/product/entity/product.entity';
import { ProductModel } from 'src/resources/product/model/product.model';
import { Repository } from 'typeorm';

@Injectable()
export class FindProductRepository implements FindProductRepositoryContract {
  constructor(
    @InjectRepository(ProductModel)
    private readonly repository: Repository<ProductModel>,
  ) {}

  async findProduct(input: { id?: number; name?: string }): Promise<Product> {
    const whereCondition = input.name ? { name: input.name } : { id: input.id };
    const product = await this.repository.findOne({
      where: {
        ...whereCondition,
      },
    });

    return product;
  }
}
