import { Injectable, NotFoundException } from '@nestjs/common';
import { FindSubCategoryRepositoryContract } from 'src/resources/subcategory/contract/find-subcategory.contract';
import { SubCategory } from 'src/resources/subcategory/entity/subcategory.entity';
import { FindSubCategoryUseCase } from 'src/resources/subcategory/usecase/find-subcategory.usecase';

@Injectable()
export class FindSubCategoryService implements FindSubCategoryUseCase {
  constructor(
    private readonly findSubCategoryRepository: FindSubCategoryRepositoryContract,
  ) {}

  async findSubCategory(input: {
    id?: number;
    name?: string;
  }): Promise<SubCategory> {
    const subcategory = await this.findSubCategoryRepository.findSubCategory({
      id: input.id,
      name: input.name,
    });
    if (!subcategory) throw new NotFoundException('Subcategory not found');
    return subcategory;
  }
}
