import { Controller, Delete, Param, UseGuards } from '@nestjs/common';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { AuthGuard } from 'src/common/guard/auth.guard';
import { DeleteCategoryUseCase } from 'src/resources/category/usecase/delete-category.usecase';

@ApiBearerAuth()
@ApiTags('Category')
@Controller('category')
export class DeleteCategoryController {
  constructor(private readonly useCase: DeleteCategoryUseCase) {}

  @UseGuards(AuthGuard)
  @Delete(':id')
  async deleteCategory(@Param('id') id: number): Promise<void> {
    await this.useCase.deleteCategory({ id });
  }
}
