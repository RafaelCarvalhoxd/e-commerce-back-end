import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { UpdateCategoryRepositoryContract } from 'src/resources/category/contract/update-category.contract';
import { Category } from 'src/resources/category/entity/category.entity';
import { CategoryModel } from 'src/resources/category/model/category.model';
import { Repository } from 'typeorm';

@Injectable()
export class UpdateCategoryRepository
  implements UpdateCategoryRepositoryContract
{
  constructor(
    @InjectRepository(CategoryModel)
    private readonly repository: Repository<CategoryModel>,
  ) {}

  async updateCategory(input: { id: number; name: string }): Promise<Category> {
    await this.repository.update(input.id, { name: input.name });
    const category = await this.repository.findOne({
      where: { id: input.id },
    });
    return category;
  }
}
