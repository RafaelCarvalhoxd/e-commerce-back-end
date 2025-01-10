import { Body, Controller, Param, Patch } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { UpdateProductDto } from 'src/resources/product/dto/update-product.dto';
import { Product } from 'src/resources/product/entity/product.entity';
import { UpdateProductUseCase } from 'src/resources/product/usecase/update-product.usecase';

@ApiTags('Product')
@Controller('product')
export class UpdateProductController {
  constructor(private readonly useCase: UpdateProductUseCase) {}

  @Patch()
  async UpdateProduct(
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
