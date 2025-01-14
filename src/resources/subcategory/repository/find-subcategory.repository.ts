import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { FindSubCategoryRepositoryContract } from 'src/resources/subcategory/contract/find-subcategory.contract';
import { SubCategory } from 'src/resources/subcategory/entity/subcategory.entity';
import { SubCategoryModel } from 'src/resources/subcategory/model/subcategory.model';
import { Repository } from 'typeorm';

@Injectable()
export class FindSubCategoryRepository
  implements FindSubCategoryRepositoryContract
{
  constructor(
    @InjectRepository(SubCategoryModel)
    private readonly repository: Repository<SubCategoryModel>,
  ) {}

  async findSubCategory(input: {
    id?: number;
    name?: string;
  }): Promise<SubCategory> {
    const whereCondition = input.name ? { name: input.name } : { id: input.id };
    const subcategory = await this.repository.findOne({
      where: whereCondition,
    });
    return subcategory;
  }
}
