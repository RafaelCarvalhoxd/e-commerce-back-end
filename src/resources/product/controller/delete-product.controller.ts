import { Controller, Delete, Param, UseGuards } from '@nestjs/common';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { Roles } from 'src/common/decorators/roles.decorator';
import { UserRoles } from 'src/common/enums/roles.enum';
import { AuthGuard } from 'src/common/guard/auth.guard';
import { DeleteProductUseCase } from 'src/resources/product/usecase/delete-product.usecase';

@ApiTags('Product')
@ApiBearerAuth()
@Controller('product')
export class DeleteProductController {
  constructor(private readonly useCase: DeleteProductUseCase) {}

  @Roles(UserRoles.OPERATIONS)
  @UseGuards(AuthGuard)
  @Delete(':id')
  async deleteProduct(@Param('id') id: number): Promise<void> {
    await this.useCase.deleteProduct({ id });
  }
}
