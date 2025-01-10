import { Controller, Get, Param } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { Category } from 'src/resources/category/entity/category.entity';
import { FindCategoryUseCase } from 'src/resources/category/usecase/find-category.usecase';

@ApiTags('Category')
@Controller('category')
export class FindCategoryController {
  constructor(private readonly useCase: FindCategoryUseCase) {}

  @Get(':id')
  async findCategory(@Param('id') id: number): Promise<Category> {
    return this.useCase.findCategory({
      id: id,
    });
  }
}
