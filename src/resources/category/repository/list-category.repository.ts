import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ListCategoryRepositoryContract } from 'src/resources/category/contract/list-category.contract';
import { Category } from 'src/resources/category/entity/category.entity';
import { CategoryModel } from 'src/resources/category/model/category.model';
import { Repository } from 'typeorm';

@Injectable()
export class ListCategoryRepository implements ListCategoryRepositoryContract {
  constructor(
    @InjectRepository(CategoryModel)
    private readonly repository: Repository<CategoryModel>,
  ) {}

  async listCategory(input: { name?: string }): Promise<Category[]> {
    const categories = await this.repository.find({
      where: input.name ? { name: input.name } : {},
    });

    return categories;
  }
}
