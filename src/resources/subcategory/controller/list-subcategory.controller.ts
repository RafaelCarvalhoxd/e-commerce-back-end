import { Controller, Get, Query } from '@nestjs/common';
import { ApiQuery, ApiTags } from '@nestjs/swagger';
import { Category } from 'src/resources/category/entity/category.entity';
import { ListSubCategoryUseCase } from 'src/resources/subcategory/usecase/list-subcategory.usecase';

@ApiTags('SubCategory')
@Controller('subcategory')
export class ListSubCategoryController {
  constructor(private readonly useCase: ListSubCategoryUseCase) {}

  @Get()
  @ApiQuery({
    name: 'name',
    required: false,
    description: 'Filter by subcategory name',
    type: [String],
  })
  @ApiQuery({
    name: 'ids',
    required: false,
    type: [Number],
    description: 'Filter by subcategory ids',
  })
  @ApiQuery({
    name: 'categoryIds',
    required: false,
    type: [Number],
    description: 'Filter by category ids',
  })
  async list(
    @Query('name') name: string[],
    @Query('ids') ids: number[],
    @Query('categoryIds') categoryIds: number[],
  ): Promise<Category[]> {
    return this.useCase.listSubCategory({
      ids,
      categoryIds,
      name,
    });
  }
}
