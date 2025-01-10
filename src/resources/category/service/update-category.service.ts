import {
  ConflictException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { FindCategoryRepositoryContract } from 'src/resources/category/contract/find-category.contract';
import { UpdateCategoryRepositoryContracty } from 'src/resources/category/contract/update-category.contract';
import { Category } from 'src/resources/category/entity/category.entity';
import { UpdateCategoryUseCase } from 'src/resources/category/usecase/update-category.usecase';

@Injectable()
export class UpdateCategoryService implements UpdateCategoryUseCase {
  constructor(
    private readonly findCategoryRepository: FindCategoryRepositoryContract,
    private readonly updateCategoryRepository: UpdateCategoryRepositoryContracty,
  ) {}

  async updateCategory(input: { id: number; name: string }): Promise<Category> {
    const [category, existingCategory] = await Promise.all([
      this.findCategoryRepository.findCategory({ id: input.id }),
      this.findCategoryRepository.findCategory({ name: input.name }),
    ]);
    if (!category) throw new NotFoundException('Category not found!');
    if (existingCategory && existingCategory.id !== category.id)
      throw new ConflictException('Category already exists!');
    const updatedCategory = await this.updateCategoryRepository.updateCategory({
      id: category.id,
      name: input.name,
    });
    return updatedCategory;
  }
}
