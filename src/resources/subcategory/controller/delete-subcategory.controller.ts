import { Controller, Delete, Param, UseGuards } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { AuthGuard } from 'src/common/guard/auth.guard';
import { DeleteSubCategoryUseCase } from 'src/resources/subcategory/usecase/delete-subcategory.usecase';

@ApiTags('SubCategory')
@Controller('subcategory')
export class DeleteSubCategoryController {
  constructor(private readonly useCase: DeleteSubCategoryUseCase) {}

  @UseGuards(AuthGuard)
  @Delete(':id')
  async deleteSubCategory(@Param('id') id: number): Promise<void> {
    await this.useCase.deleteSubCategory({ id });
  }
}
