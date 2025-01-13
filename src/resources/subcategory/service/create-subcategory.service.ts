import { ConflictException, Injectable } from '@nestjs/common';
import { FindCategoryUseCase } from 'src/resources/category/usecase/find-category.usecase';
import { CreateSubCategoryRepositoryContract } from 'src/resources/subcategory/contract/create-subcategory.contract';
import { FindSubCategoryRepositoryContract } from 'src/resources/subcategory/contract/find-subcategory.contract';
import { SubCategory } from 'src/resources/subcategory/entity/subcategory.entity';
import { CreateSubCategoryUseCase } from 'src/resources/subcategory/usecase/create-subcategory.usecase';

@Injectable()
export class CreateSubCategoryService implements CreateSubCategoryUseCase {
  constructor(
    private readonly findSubCategoryRepository: FindSubCategoryRepositoryContract,
    private readonly findCategoryUseCase: FindCategoryUseCase,
    private readonly createSubCategoryRepository: CreateSubCategoryRepositoryContract,
  ) {}

  async createSubCategory(input: {
    name: string;
    categoryId: number;
  }): Promise<SubCategory> {
    const [category, existingSubCategory] = await Promise.all([
      this.findCategoryUseCase.findCategory({ id: input.categoryId }),
      this.findSubCategoryRepository.findSubCategory({ name: input.name }),
    ]);
    if (existingSubCategory)
      throw new ConflictException('Subcategory already exists');
    const subcategory =
      await this.createSubCategoryRepository.createSubCategory({
        name: input.name,
        categoryId: category.id,
      });
    return subcategory;
  }
}
