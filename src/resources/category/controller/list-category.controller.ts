import { Controller, Get, Query, UseGuards } from '@nestjs/common';
import { ApiBearerAuth, ApiQuery, ApiTags } from '@nestjs/swagger';
import { AuthGuard } from 'src/common/guard/auth.guard';
import { Category } from 'src/resources/category/entity/category.entity';
import { ListCategoryUseCase } from 'src/resources/category/usecase/list-category.usecase';

@ApiBearerAuth()
@ApiTags('Category')
@Controller('category')
export class ListCategoryController {
  constructor(private readonly useCase: ListCategoryUseCase) {}

  @UseGuards(AuthGuard)
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
