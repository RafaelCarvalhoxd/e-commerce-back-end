import { Controller, Get, Param, UseGuards } from '@nestjs/common';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { AuthGuard } from 'src/common/guard/auth.guard';
import { Category } from 'src/resources/category/entity/category.entity';
import { FindCategoryUseCase } from 'src/resources/category/usecase/find-category.usecase';

@ApiBearerAuth()
@ApiTags('Category')
@Controller('category')
export class FindCategoryController {
  constructor(private readonly useCase: FindCategoryUseCase) {}

  @UseGuards(AuthGuard)
  @Get(':id')
  async findCategory(@Param('id') id: number): Promise<Category> {
    return this.useCase.findCategory({
      id: id,
    });
  }
}
