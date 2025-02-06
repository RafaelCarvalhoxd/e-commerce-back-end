import { Body, Controller, Param, Put, UseGuards } from '@nestjs/common';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { AuthGuard } from 'src/common/guard/auth.guard';
import { UpdateCategoryDto } from 'src/resources/category/dto/update-category.dto';
import { Category } from 'src/resources/category/entity/category.entity';
import { UpdateCategoryUseCase } from 'src/resources/category/usecase/update-category.usecase';

@ApiBearerAuth()
@ApiTags('Category')
@Controller('category')
export class UpdateCategoryController {
  constructor(private readonly useCase: UpdateCategoryUseCase) {}

  @UseGuards(AuthGuard)
  @Put(':id')
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
