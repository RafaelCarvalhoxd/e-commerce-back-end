import { Injectable } from '@nestjs/common';
import { CreateProductRepositoryContract } from 'src/resources/product/contract/create-product.contract';
import { Product } from 'src/resources/product/entity/product.entity';
import { ProductModel } from 'src/resources/product/model/product.model';
import { DataSource } from 'typeorm';

@Injectable()
export class CreateProductRepository
  implements CreateProductRepositoryContract
{
  constructor(private readonly ds: DataSource) {}

  async createProduct(input: {
    name: string;
    image?: string;
    description?: string;
    price: number;
    categoryId: number;
    subcategoryId?: number;
    discountPrice?: number;
    active: boolean;
  }): Promise<Product> {
    const result = await this.ds
      .createQueryBuilder()
      .insert()
      .into(ProductModel)
      .values({
        name: input.name,
        image: input.image,
        description: input.description,
        price: input.price,
        categoryId: input.categoryId,
        subcategoryId: input.subcategoryId,
        discountPrice: input.discountPrice,
        active: input.active,
      })
      .returning('*')
      .execute();

    const product = result.raw[0];
    return product;
  }
}
