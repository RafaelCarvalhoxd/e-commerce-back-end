import { Injectable } from '@nestjs/common';
import { DeleteSubCategoryRepositoryContract } from 'src/resources/subcategory/contract/delete-subcategory.contract';
import { DeleteSubCategoryUseCase } from 'src/resources/subcategory/usecase/delete-subcategory.usecase';
import { FindSubCategoryUseCase } from 'src/resources/subcategory/usecase/find-subcategory.usecase';

@Injectable()
export class DeleteSubCategoryService implements DeleteSubCategoryUseCase {
  constructor(
    private readonly findSubCategoryUseCase: FindSubCategoryUseCase,
    private readonly deleteSubCategoryRepository: DeleteSubCategoryRepositoryContract,
  ) {}

  async deleteSubCategory(input: { id: number }): Promise<void> {
    const subcategory = await this.findSubCategoryUseCase.findSubCategory({
      id: input.id,
    });
    await this.deleteSubCategoryRepository.deleteSubCategory({
      id: subcategory.id,
    });
  }
}
