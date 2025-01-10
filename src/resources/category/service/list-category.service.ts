import { Injectable } from '@nestjs/common';
import { ListCategoryRepositoryContract } from 'src/resources/category/contract/list-category.contract';
import { Category } from 'src/resources/category/entity/category.entity';
import { ListCategoryUseCase } from 'src/resources/category/usecase/list-category.usecase';

@Injectable()
export class ListCategoryService implements ListCategoryUseCase {
  constructor(
    private readonly listCategoryRepository: ListCategoryRepositoryContract,
  ) {}

  async listCategory(input: { name: string }): Promise<Category[]> {
    const categories = await this.listCategoryRepository.listCategory({
      name: input.name,
    });
    return categories;
  }
}
