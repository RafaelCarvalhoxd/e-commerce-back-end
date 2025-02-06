import { Controller, Get, Query, UseGuards } from '@nestjs/common';
import { ApiBearerAuth, ApiQuery, ApiTags } from '@nestjs/swagger';
import { AuthGuard } from 'src/common/guard/auth.guard';
import { ToArrayNumberPipe } from 'src/common/pipes/to-array-number.pipe';
import { ToArrayStringPipe } from 'src/common/pipes/to-array-string.pipe';
import { Category } from 'src/resources/category/entity/category.entity';
import { ListSubCategoryUseCase } from 'src/resources/subcategory/usecase/list-subcategory.usecase';

@ApiBearerAuth()
@ApiTags('SubCategory')
@Controller('subcategory')
export class ListSubCategoryController {
  constructor(private readonly useCase: ListSubCategoryUseCase) {}

  @UseGuards(AuthGuard)
  @Get()
  @ApiQuery({
    name: 'name',
    required: false,
    description: 'Filter by subcategory name',
    isArray: true,
  })
  @ApiQuery({
    name: 'ids',
    required: false,
    isArray: true,
    description: 'Filter by subcategory ids',
  })
  @ApiQuery({
    name: 'categoryIds',
    required: false,
    isArray: true,
    description: 'Filter by category ids',
  })
  async list(
    @Query('name', ToArrayStringPipe) name: string[],
    @Query('ids', ToArrayNumberPipe) ids: number[],
    @Query('categoryIds', ToArrayNumberPipe) categoryIds: number[],
  ): Promise<Category[]> {
    return this.useCase.listSubCategory({
      ids,
      categoryIds,
      name,
    });
  }
}
