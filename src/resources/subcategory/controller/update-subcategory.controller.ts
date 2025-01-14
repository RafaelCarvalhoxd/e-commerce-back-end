import { Body, Controller, Param, Put } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { Category } from 'src/resources/category/entity/category.entity';
import { UpdateSubCategoryDto } from 'src/resources/subcategory/dto/update-subcategory.dto';
import { UpdateSubCategoryUseCase } from 'src/resources/subcategory/usecase/update-subcategory.usecase';

@ApiTags('SubCategory')
@Controller('subcategory')
export class UpdateSubCategoryController {
  constructor(private readonly useCase: UpdateSubCategoryUseCase) {}

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
