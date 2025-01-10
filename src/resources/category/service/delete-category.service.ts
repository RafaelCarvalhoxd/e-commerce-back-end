import { Injectable } from '@nestjs/common';
import { DeleteCategoryRepositoryContract } from 'src/resources/category/contract/delete-category.contract';
import { DeleteCategoryUseCase } from 'src/resources/category/usecase/delete-category.usecase';
import { FindCategoryUseCase } from 'src/resources/category/usecase/find-category.usecase';

@Injectable()
export class DeleteCategoryService implements DeleteCategoryUseCase {
  constructor(
    private readonly findCategoryUseCase: FindCategoryUseCase,
    private readonly deleteCategoryRepository: DeleteCategoryRepositoryContract,
  ) {}

  async deleteCategory(input: { id: number }): Promise<void> {
    const category = await this.findCategoryUseCase.findCategory({
      id: input.id,
    });
    await this.deleteCategoryRepository.deleteCategory({ id: category.id });
  }
}
