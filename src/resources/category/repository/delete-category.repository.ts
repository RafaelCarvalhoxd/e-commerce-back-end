import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { DeleteCategoryRepositoryContract } from 'src/resources/category/contract/delete-category.contract';
import { CategoryModel } from 'src/resources/category/model/category.model';
import { Repository } from 'typeorm';

@Injectable()
export class DeleteCategoryRepository
  implements DeleteCategoryRepositoryContract
{
  constructor(
    @InjectRepository(CategoryModel)
    private readonly repository: Repository<CategoryModel>,
  ) {}

  async deleteCategory(input: { id: number }): Promise<void> {
    await this.repository.delete(input.id);
  }
}
