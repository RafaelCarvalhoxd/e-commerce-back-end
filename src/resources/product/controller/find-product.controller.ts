import { Controller, Get, Param } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { Product } from 'src/resources/product/entity/product.entity';
import { FindProductUseCase } from 'src/resources/product/usecase/find-product.usecase';

@ApiTags('Product')
@Controller('product')
export class FindProductController {
  constructor(private readonly useCase: FindProductUseCase) {}

  @Get()
  async findProduct(@Param('id') id: number): Promise<Product> {
    return this.useCase.findProduct({
      id: id,
    });
  }
}
