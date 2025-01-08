import { Injectable } from '@nestjs/common';
import { UpdateProductRepositoryContract } from 'src/resources/product/contract/update-product.contract';
import { Product } from 'src/resources/product/entity/product.entity';
import { ProductModel } from 'src/resources/product/model/product.model';
import { DataSource } from 'typeorm';

@Injectable()
export class UpdateProductRepository
  implements UpdateProductRepositoryContract
{
  constructor(private readonly ds: DataSource) {}

  async updateProduct(input: {
    id: number;
    name?: string;
    image?: string;
    description?: string;
    price?: number;
    subcategoryId?: number;
    discountPrice?: number;
    active: boolean;
  }): Promise<Product> {
    const result = await this.ds
      .createQueryBuilder()
      .update(ProductModel)
      .set({
        id: input.id,
        name: input.name,
        image: input.image,
        description: input.description,
        price: input.price,
        subcategoryId: input.subcategoryId,
        discountPrice: input.discountPrice,
        active: input.active,
      })
      .where('id = :id', { id: input.id })
      .returning('*')
      .execute();

    const product = result.raw[0];
    return product;
  }
}
