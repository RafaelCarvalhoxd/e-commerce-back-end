import { Controller, Delete, Param } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { DeleteCategoryUseCase } from 'src/resources/category/usecase/delete-category.usecase';

@ApiTags('Category')
@Controller('category')
export class DeleteCategoryController {
  constructor(private readonly useCase: DeleteCategoryUseCase) {}

  @Delete(':id')
  async deleteCategory(@Param('id') id: number): Promise<void> {
    await this.useCase.deleteCategory({ id });
  }
}
