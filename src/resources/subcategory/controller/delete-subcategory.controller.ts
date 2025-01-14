import { Controller, Delete, Param } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { DeleteSubCategoryUseCase } from 'src/resources/subcategory/usecase/delete-subcategory.usecase';

@ApiTags('SubCategory')
@Controller('subcategory')
export class DeleteSubCategoryController {
  constructor(private readonly useCase: DeleteSubCategoryUseCase) {}

  @Delete(':id')
  async deleteCategory(@Param('id') id: number): Promise<void> {
    await this.useCase.deleteSubCategory({ id });
  }
}
