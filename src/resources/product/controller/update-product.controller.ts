import { Body, Controller, Param, Patch, UseGuards } from '@nestjs/common';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { AuthGuard } from 'src/common/guard/auth.guard';
import { UpdateProductDto } from 'src/resources/product/dto/update-product.dto';
import { Product } from 'src/resources/product/entity/product.entity';
import { UpdateProductUseCase } from 'src/resources/product/usecase/update-product.usecase';

@ApiTags('Product')
@ApiBearerAuth()
@Controller('product')
export class UpdateProductController {
  constructor(private readonly useCase: UpdateProductUseCase) {}

  @UseGuards(AuthGuard)
  @Patch(':id')
  async updateProduct(
    @Param('id') id: number,
    @Body() input: UpdateProductDto,
  ): Promise<Product> {
    return this.useCase.updateProduct({
      id: id,
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
