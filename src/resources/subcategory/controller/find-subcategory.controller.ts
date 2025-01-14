import { Controller, Get, Param } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { SubCategory } from 'src/resources/subcategory/entity/subcategory.entity';
import { FindSubCategoryUseCase } from 'src/resources/subcategory/usecase/find-subcategory.usecase';

@ApiTags('SubCategory')
@Controller('subcategory')
export class FindSubCategoryController {
  constructor(private readonly useCase: FindSubCategoryUseCase) {}

  @Get(':id')
  async findSubCategory(@Param('id') id: number): Promise<SubCategory> {
    return this.useCase.findSubCategory({
      id: id,
    });
  }
}
