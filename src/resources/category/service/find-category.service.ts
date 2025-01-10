import { Injectable, NotFoundException } from '@nestjs/common';
import { FindCategoryRepositoryContract } from 'src/resources/category/contract/find-category.contract';
import { Category } from 'src/resources/category/entity/category.entity';
import { FindCategoryUseCase } from 'src/resources/category/usecase/find-category.usecase';

@Injectable()
export class FindCategoryService implements FindCategoryUseCase {
  constructor(
    private readonly findCategoryRepository: FindCategoryRepositoryContract,
  ) {}

  async findCategory(input: { id?: number; name?: string }): Promise<Category> {
    const category = await this.findCategoryRepository.findCategory({
      id: input.id,
      name: input.name,
    });
    if (!category) throw new NotFoundException('Category not found!');
    return category;
  }
}
