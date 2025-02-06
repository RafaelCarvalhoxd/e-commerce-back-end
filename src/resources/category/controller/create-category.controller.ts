import { Body, Controller, Post, UseGuards } from '@nestjs/common';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { AuthGuard } from 'src/common/guard/auth.guard';
import { CreateCategoryDto } from 'src/resources/category/dto/create-category.dto';
import { Category } from 'src/resources/category/entity/category.entity';
import { CreateCategoryUseCase } from 'src/resources/category/usecase/create-category.usecase';

@ApiBearerAuth()
@ApiTags('Category')
@Controller('category')
export class CreateCategoryController {
  constructor(private readonly useCase: CreateCategoryUseCase) {}

  @UseGuards(AuthGuard)
  @Post()
  async createCategory(@Body() input: CreateCategoryDto): Promise<Category> {
    return this.useCase.createCategory({
      name: input.name,
    });
  }
}
