import { Controller, Get, Param, UseGuards } from '@nestjs/common';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { AuthGuard } from 'src/common/guard/auth.guard';
import { Product } from 'src/resources/product/entity/product.entity';
import { FindProductUseCase } from 'src/resources/product/usecase/find-product.usecase';

@ApiTags('Product')
@ApiBearerAuth()
@Controller('product')
export class FindProductController {
  constructor(private readonly useCase: FindProductUseCase) {}

  @UseGuards(AuthGuard)
  @Get(':id')
  async findProduct(@Param('id') id: number): Promise<Product> {
    return this.useCase.findProduct({
      id: id,
    });
  }
}
