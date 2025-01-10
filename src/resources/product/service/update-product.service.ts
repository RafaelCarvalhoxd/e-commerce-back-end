import {
  ConflictException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { FindProductRepositoryContract } from 'src/resources/product/contract/find-product.contract';
import { UpdateProductRepositoryContract } from 'src/resources/product/contract/update-product.contract';
import { Product } from 'src/resources/product/entity/product.entity';
import { UpdateProductUseCase } from 'src/resources/product/usecase/update-product.usecase';

@Injectable()
export class UpdateProductService implements UpdateProductUseCase {
  constructor(
    private readonly updateProductRepository: UpdateProductRepositoryContract,
    private readonly findProductRepository: FindProductRepositoryContract,
  ) {}

  async updateProduct(input: {
    id: number;
    sku?: string;
    barcode?: string;
    name?: string;
    image?: string;
    description?: string;
    price?: string;
    subcategoryId?: number;
    discountPrice?: string;
    active: boolean;
  }): Promise<Product> {
    const [existingProduct, product] = await Promise.all([
      this.findProductRepository.findProduct({ name: input.name }),
      this.findProductRepository.findProduct({ id: input.id }),
    ]);
    if (!product) throw new NotFoundException('Product not found!');
    if (existingProduct)
      throw new ConflictException('Product name already exists!');
    if (input.discountPrice && input.discountPrice >= input.price)
      throw new ConflictException(
        'Discount price must be less than the price!',
      );
    if (parseFloat(input.price) < 1)
      throw new ConflictException('Price must be greater than 1!');
    const updatedProduct = await this.updateProductRepository.updateProduct({
      id: input.id,
      name: input.name,
      image: input.image,
      sku: input.sku,
      barcode: input.barcode,
      description: input.description,
      price: input.price,
      subcategoryId: input.subcategoryId,
      discountPrice: input.discountPrice,
      active: input.active,
    });
    return updatedProduct;
  }
}
