import { ConflictException, Injectable } from '@nestjs/common';
import { User } from 'src/common/types/user.type';
import { CreateProductRepositoryContract } from 'src/resources/product/contract/create-product.contract';
import { FindProductRepositoryContract } from 'src/resources/product/contract/find-product.contract';
import { Product } from 'src/resources/product/entity/product.entity';
import { CreateProductUseCase } from 'src/resources/product/usecase/create-product.usecase';

@Injectable()
export class CreateProductService implements CreateProductUseCase {
  constructor(
    private readonly createProductRepository: CreateProductRepositoryContract,
    private readonly findProductRepository: FindProductRepositoryContract,
  ) {}

  async createProduct(input: {
    name: string;
    image?: string;
    sku: string;
    barcode: string;
    description?: string;
    price: string;
    subcategoryId?: number;
    discountPrice?: string;
    active: boolean;
    user: User;
  }): Promise<Product> {
    const existingProduct = await this.findProductRepository.findProduct({
      name: input.name,
    });
    if (existingProduct)
      throw new ConflictException('Product name already exists!');
    if (input.discountPrice && input.discountPrice >= input.price)
      throw new ConflictException(
        'Discount price must be less than the price!',
      );
    if (parseFloat(input.price) < 1)
      throw new ConflictException('Price must be greater than 1!');
    const product = await this.createProductRepository.createProduct({
      name: input.name,
      image: input.image,
      sku: input.sku,
      barcode: input.barcode,
      description: input.description,
      price: input.price,
      subcategoryId: input.subcategoryId,
      discountPrice: input.discountPrice,
      active: input.active,
      userId: input.user.id,
    });
    return product;
  }
}
