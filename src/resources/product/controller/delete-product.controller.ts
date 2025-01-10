import { Controller, Delete, Param } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { DeleteProductUseCase } from 'src/resources/product/usecase/delete-product.usecase';

@ApiTags('Product')
@Controller('product')
export class DeleteProductController {
  constructor(private readonly useCase: DeleteProductUseCase) {}

  @Delete(':id')
  async deleteProduct(@Param('id') id: number): Promise<void> {
    await this.useCase.deleteProduct({ id });
  }
}
