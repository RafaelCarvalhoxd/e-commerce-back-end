import { ConflictException, Injectable } from '@nestjs/common';
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
    photo?: string;
    description?: string;
    price: number;
    categoryId: number;
    subcategoryId?: number;
    quantity: number;
    discountPrice?: number;
  }): Promise<Product> {
    const existingProduct = await this.findProductRepository.findProduct({
      name: input.name,
    });
    if (existingProduct) throw new ConflictException('Product already exists!');
    if (input.discountPrice && input.discountPrice >= input.price)
      throw new ConflictException(
        'Discount price must be less than the price!',
      );
    if (input.price < 1)
      throw new ConflictException('Price must be greater than 1!');
    const product = await this.createProductRepository.createProduct({
      name: input.name,
      photo: input.photo,
      description: input.description,
      price: input.price,
      categoryId: input.categoryId,
      subcategoryId: input.subcategoryId,
      quantity: input.quantity,
      discountPrice: input.discountPrice,
    });
    return product;
  }
}
