import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateProductRepositoryContract } from 'src/resources/product/contract/create-product.contract';
import { Product } from 'src/resources/product/entity/product.entity';
import { ProductModel } from 'src/resources/product/model/product.model';
import { Repository } from 'typeorm';

@Injectable()
export class CreateProductRepository
  implements CreateProductRepositoryContract
{
  constructor(
    @InjectRepository(ProductModel)
    private readonly repository: Repository<ProductModel>,
  ) {}

  async createProduct(input: {
    name: string;
    image?: string;
    sku: string;
    barcode: string;
    description?: string;
    price: number;
    subcategoryId?: number;
    discountPrice?: number;
    active: boolean;
  }): Promise<Product> {
    const product = this.repository.create({
      name: input.name,
      image: input.image,
      sku: input.sku,
      barcode: input.barcode,
      description: input.description,
      price: input.price,
      subcategory: {
        id: input.subcategoryId,
      },
      discountPrice: input.discountPrice,
      active: input.active,
    });

    const savedProduct = await this.repository.save(product);

    return savedProduct;
  }
}
