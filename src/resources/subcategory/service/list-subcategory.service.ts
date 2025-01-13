import { Injectable } from '@nestjs/common';
import { ListSubCategoryRepositoryContract } from 'src/resources/subcategory/contract/list-subcategory.contract';
import { SubCategory } from 'src/resources/subcategory/entity/subcategory.entity';
import { ListSubCategoryUseCase } from 'src/resources/subcategory/usecase/list-subcategory.usecase';

@Injectable()
export class ListSubCategoryService implements ListSubCategoryUseCase {
  constructor(
    private readonly listSubCategoryRepository: ListSubCategoryRepositoryContract,
  ) {}

  async listSubCategory(input: {
    ids: number[];
    name?: string[];
    categoryIds: number[];
  }): Promise<SubCategory[]> {
    return await this.listSubCategoryRepository.listSubCategory({
      ids: input.ids,
      name: input.name,
      categoryIds: input.categoryIds,
    });
  }
}
