import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { UpdateSubCategoryRepositoryContract } from 'src/resources/subcategory/contract/update-subcategory.contract';
import { SubCategory } from 'src/resources/subcategory/entity/subcategory.entity';
import { SubCategoryModel } from 'src/resources/subcategory/model/subcategory.model';
import { Repository } from 'typeorm';

@Injectable()
export class UpdateSubCategoryRepository
  implements UpdateSubCategoryRepositoryContract
{
  constructor(
    @InjectRepository(SubCategoryModel)
    private readonly repository: Repository<SubCategoryModel>,
  ) {}

  async updateSubCategory(input: {
    id: number;
    name?: string;
    categoryId?: number;
  }): Promise<SubCategory> {
    await this.repository.update(
      {
        id: input.id,
      },
      {
        name: input.name,
        category: { id: input.categoryId },
      },
    );
    const subcategory = await this.repository.findOne({
      where: { id: input.id },
    });
    return subcategory;
  }
}
