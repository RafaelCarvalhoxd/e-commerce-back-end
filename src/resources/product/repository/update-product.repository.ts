import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { UpdateProductRepositoryContract } from 'src/resources/product/contract/update-product.contract';
import { Product } from 'src/resources/product/entity/product.entity';
import { ProductModel } from 'src/resources/product/model/product.model';
import { Repository } from 'typeorm';

@Injectable()
export class UpdateProductRepository
  implements UpdateProductRepositoryContract
{
  constructor(
    @InjectRepository(ProductModel)
    private readonly repository: Repository<ProductModel>,
  ) {}

  async updateProduct(input: {
    id: number;
    name?: string;
    sku?: string;
    barcode?: string;
    image?: string;
    description?: string;
    price?: string;
    subcategoryId?: number;
    discountPrice?: string;
    active: boolean;
    userId: number;
  }): Promise<Product> {
    await this.repository.update(input.id, {
      name: input.name,
      sku: input.sku,
      barcode: input.barcode,
      image: input.image,
      description: input.description,
      price: input.price,
      subcategory: {
        id: input.subcategoryId,
      },
      discountPrice: input.discountPrice,
      active: input.active,
      updatedBy: {
        id: input.userId,
      },
    });

    const updatedProduct = await this.repository.findOne({
      where: {
        id: input.id,
      },
      relations: {
        subcategory: {
          category: true,
        },
      },
    });

    return updatedProduct;
  }
}
