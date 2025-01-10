import { Body, Controller, Post } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { CreateCategoryDto } from 'src/resources/category/dto/create-category.dto';
import { Category } from 'src/resources/category/entity/category.entity';
import { CreateCategoryUseCase } from 'src/resources/category/usecase/create-category.usecase';

@ApiTags('Category')
@Controller('category')
export class CreateCategoryController {
  constructor(private readonly useCase: CreateCategoryUseCase) {}

  @Post()
  async createCategory(@Body() input: CreateCategoryDto): Promise<Category> {
    return this.useCase.createCategory({
      name: input.name,
    });
  }
}
