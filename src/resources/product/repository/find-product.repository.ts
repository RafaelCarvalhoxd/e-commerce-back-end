import { Injectable } from '@nestjs/common';
import { FindProductRepositoryContract } from 'src/resources/product/contract/find-product.contract';
import { Product } from 'src/resources/product/entity/product.entity';
import { ProductModel } from 'src/resources/product/model/product.model';
import { DataSource } from 'typeorm';

@Injectable()
export class FindProductRepository implements FindProductRepositoryContract {
  constructor(private readonly ds: DataSource) {}

  async findProduct(input: { id?: number; name?: string }): Promise<Product> {
    const product = await this.ds
      .getRepository(ProductModel)
      .createQueryBuilder('p')
      .where('p.id = :id', { id: input.id })
      .orWhere('p.name = :name', { name: input.name })
      .getOne();

    return product;
  }
}
