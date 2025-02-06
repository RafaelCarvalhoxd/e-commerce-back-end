import { Body, Controller, Param, Put, UseGuards } from '@nestjs/common';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { AuthGuard } from 'src/common/guard/auth.guard';
import { Category } from 'src/resources/category/entity/category.entity';
import { UpdateSubCategoryDto } from 'src/resources/subcategory/dto/update-subcategory.dto';
import { UpdateSubCategoryUseCase } from 'src/resources/subcategory/usecase/update-subcategory.usecase';

@ApiBearerAuth()
@ApiTags('SubCategory')
@Controller('subcategory')
export class UpdateSubCategoryController {
  constructor(private readonly useCase: UpdateSubCategoryUseCase) {}

  @UseGuards(AuthGuard)
  @Put(':id')
  async updateSubCategory(
    @Param('id') id: number,
    @Body() input: UpdateSubCategoryDto,
  ): Promise<Category> {
    return this.useCase.updateSubCategory({
      id: id,
      name: input.name,
      categoryId: input.categoryId,
    });
  }
}
