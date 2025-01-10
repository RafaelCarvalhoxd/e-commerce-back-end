import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { FindCategoryRepositoryContract } from 'src/resources/category/contract/find-category.contract';
import { Category } from 'src/resources/category/entity/category.entity';
import { CategoryModel } from 'src/resources/category/model/category.model';
import { Repository } from 'typeorm';

@Injectable()
export class FindCategoryRepository implements FindCategoryRepositoryContract {
  constructor(
    @InjectRepository(CategoryModel)
    private readonly repository: Repository<CategoryModel>,
  ) {}

  async findCategory(input: { id?: number; name?: string }): Promise<Category> {
    const whereConditions = input.name
      ? { name: input.name }
      : { id: input.id };
    const category = await this.repository.findOne({
      where: {
        ...whereConditions,
      },
    });

    return category;
  }
}
