import { Body, Controller, Post, UseGuards } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { AuthGuard } from 'src/common/guard/auth.guard';
import { CreateSubCategoryDto } from 'src/resources/subcategory/dto/create-subategory.dto';
import { SubCategory } from 'src/resources/subcategory/entity/subcategory.entity';
import { CreateSubCategoryUseCase } from 'src/resources/subcategory/usecase/create-subcategory.usecase';

@ApiTags('SubCategory')
@Controller('subcategory')
export class CreateSubCategoryController {
  constructor(private readonly useCase: CreateSubCategoryUseCase) {}

  @UseGuards(AuthGuard)
  @Post()
  async createSubCategory(
    @Body() input: CreateSubCategoryDto,
  ): Promise<SubCategory> {
    return this.useCase.createSubCategory({
      name: input.name,
      categoryId: input.categoryId,
    });
  }
}
