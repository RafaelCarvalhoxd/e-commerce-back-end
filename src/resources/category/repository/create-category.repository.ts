import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateCategoryRepositoryContract } from 'src/resources/category/contract/create-category.contract';
import { Category } from 'src/resources/category/entity/category.entity';
import { CategoryModel } from 'src/resources/category/model/category.model';
import { Repository } from 'typeorm';

@Injectable()
export class CreateCategoryRepository
  implements CreateCategoryRepositoryContract
{
  constructor(
    @InjectRepository(CategoryModel)
    private readonly repository: Repository<CategoryModel>,
  ) {}

  async createCategory(input: { name: string }): Promise<Category> {
    const category = this.repository.create({
      name: input.name,
    });
    const savedCategory = await this.repository.save(category);
    return savedCategory;
  }
}
