import { Controller, Delete, Param, UseGuards } from '@nestjs/common';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { AuthGuard } from 'src/common/guard/auth.guard';
import { DeleteProductUseCase } from 'src/resources/product/usecase/delete-product.usecase';

@ApiTags('Product')
@ApiBearerAuth()
@Controller('product')
export class DeleteProductController {
  constructor(private readonly useCase: DeleteProductUseCase) {}

  @UseGuards(AuthGuard)
  @Delete(':id')
  async deleteProduct(@Param('id') id: number): Promise<void> {
    await this.useCase.deleteProduct({ id });
  }
}
