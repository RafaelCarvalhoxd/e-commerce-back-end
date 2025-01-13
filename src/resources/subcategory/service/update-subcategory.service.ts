import {
  ConflictException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { FindCategoryUseCase } from 'src/resources/category/usecase/find-category.usecase';
import { FindSubCategoryRepositoryContract } from 'src/resources/subcategory/contract/find-subcategory.contract';
import { UpdateSubCategoryRepositoryContract } from 'src/resources/subcategory/contract/update-subcategory.contract';
import { SubCategory } from 'src/resources/subcategory/entity/subcategory.entity';
import { UpdateSubCategoryUseCase } from 'src/resources/subcategory/usecase/update-subcategory.usecase';

@Injectable()
export class UpdateSubCategoryService implements UpdateSubCategoryUseCase {
  constructor(
    private readonly findSubCategoryRepository: FindSubCategoryRepositoryContract,
    private readonly findCategoryUseCase: FindCategoryUseCase,
    private readonly updateSubCategoryRepository: UpdateSubCategoryRepositoryContract,
  ) {}

  async updateSubCategory(input: {
    id: number;
    name?: string;
    categoryId?: number;
  }): Promise<SubCategory> {
    const [category, subcategory, existingSubCategory] = await Promise.all([
      this.findCategoryUseCase.findCategory({ id: input.categoryId }),
      this.findSubCategoryRepository.findSubCategory({ id: input.id }),
      this.findSubCategoryRepository.findSubCategory({ name: input.name }),
    ]);
    if (!subcategory) throw new NotFoundException('Subcategory not found');
    if (existingSubCategory)
      throw new ConflictException('Subcategory already exists');
    const updatedSubcategory =
      await this.updateSubCategoryRepository.updateSubCategory({
        id: subcategory.id,
        name: input.name ?? subcategory.name,
        categoryId: input.categoryId ?? category.id,
      });
    return updatedSubcategory;
  }
}
