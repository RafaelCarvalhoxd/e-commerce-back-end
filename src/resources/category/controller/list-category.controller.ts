import { Controller, Get, Query } from '@nestjs/common';
import { ApiQuery, ApiTags } from '@nestjs/swagger';
import { Category } from 'src/resources/category/entity/category.entity';
import { ListCategoryUseCase } from 'src/resources/category/usecase/list-category.usecase';

@ApiTags('Category')
@Controller('Category')
export class ListCategoryController {
  constructor(private readonly useCase: ListCategoryUseCase) {}

  @Get()
  @ApiQuery({
    name: 'name',
    required: false,
    description: 'Filter by category name',
  })
  async list(@Query('name') name: string): Promise<Category[]> {
    return this.useCase.listCategory({
      name: name,
    });
  }
}
