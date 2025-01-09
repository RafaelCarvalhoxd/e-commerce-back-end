import { Body, Controller, Post } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { CreateProductDto } from 'src/resources/product/dto/create-product.dto';
import { Product } from 'src/resources/product/entity/product.entity';
import { CreateProductUseCase } from 'src/resources/product/usecase/create-product.usecase';

@ApiTags('Product')
@Controller('product')
export class ProductController {
  constructor(private readonly useCase: CreateProductUseCase) {}

  @Post()
  async createProduct(@Body() input: CreateProductDto): Promise<Product> {
    return this.useCase.createProduct({
      name: input.name,
      sku: input.sku,
      barcode: input.barcode,
      image: input.image,
      description: input.description,
      price: input.price,
      subcategoryId: input.subcategoryId,
      discountPrice: input.discountPrice,
      active: input.active,
    });
  }
}
