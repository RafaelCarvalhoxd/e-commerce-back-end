import { Controller, Get, Param, UseGuards } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { AuthGuard } from 'src/common/guard/auth.guard';
import { SubCategory } from 'src/resources/subcategory/entity/subcategory.entity';
import { FindSubCategoryUseCase } from 'src/resources/subcategory/usecase/find-subcategory.usecase';

@ApiTags('SubCategory')
@Controller('subcategory')
export class FindSubCategoryController {
  constructor(private readonly useCase: FindSubCategoryUseCase) {}

  @UseGuards(AuthGuard)
  @Get(':id')
  async findSubCategory(@Param('id') id: number): Promise<SubCategory> {
    return this.useCase.findSubCategory({
      id: id,
    });
  }
}
