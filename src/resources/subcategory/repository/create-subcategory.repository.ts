import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateSubCategoryRepositoryContract } from 'src/resources/subcategory/contract/create-subcategory.contract';
import { SubCategory } from 'src/resources/subcategory/entity/subcategory.entity';
import { SubCategoryModel } from 'src/resources/subcategory/model/subcategory.model';
import { Repository } from 'typeorm';

@Injectable()
export class CreateSubCategoryRepository
  implements CreateSubCategoryRepositoryContract
{
  constructor(
    @InjectRepository(SubCategoryModel)
    private readonly repository: Repository<SubCategoryModel>,
  ) {}

  async createSubCategory(input: {
    name: string;
    categoryId: number;
  }): Promise<SubCategory> {
    const subcategory = this.repository.create({
      name: input.name,
      category: { id: input.categoryId },
    });
    const savedSubcategory = await this.repository.save(subcategory);
    return savedSubcategory;
  }
}
