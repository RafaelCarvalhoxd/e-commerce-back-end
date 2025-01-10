import { ConflictException, Injectable } from '@nestjs/common';
import { CreateCategoryRepositoryContract } from 'src/resources/category/contract/create-category.contract';
import { FindCategoryRepositoryContract } from 'src/resources/category/contract/find-category.contract';
import { Category } from 'src/resources/category/entity/category.entity';
import { CreateCategoryUseCase } from 'src/resources/category/usecase/create-category.usecase';

@Injectable()
export class CreateCategoryService implements CreateCategoryUseCase {
  constructor(
    private readonly findCategoryRepository: FindCategoryRepositoryContract,
    private readonly createCategoryRepository: CreateCategoryRepositoryContract,
  ) {}

  async createCategory(input: { name: string }): Promise<Category> {
    const category = await this.findCategoryRepository.findCategory({
      name: input.name,
    });
    if (category) throw new ConflictException('Category already exists!');
    const createdCategory = await this.createCategoryRepository.createCategory({
      name: input.name,
    });
    return createdCategory;
  }
}
