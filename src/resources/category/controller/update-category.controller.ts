import { Body, Controller, Param, Patch } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { UpdateCategoryDto } from 'src/resources/category/dto/update-category.dto';
import { Category } from 'src/resources/category/entity/category.entity';
import { UpdateCategoryUseCase } from 'src/resources/category/usecase/update-category.usecase';

@ApiTags('Category')
@Controller('Category')
export class UpdateCategoryController {
  constructor(private readonly useCase: UpdateCategoryUseCase) {}

  @Patch()
  async updateCategory(
    @Param('id') id: number,
    @Body() input: UpdateCategoryDto,
  ): Promise<Category> {
    return this.useCase.updateCategory({
      id: id,
      name: input.name,
    });
  }
}
