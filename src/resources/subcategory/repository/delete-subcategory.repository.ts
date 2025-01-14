import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { DeleteSubCategoryRepositoryContract } from 'src/resources/subcategory/contract/delete-subcategory.contract';
import { SubCategoryModel } from 'src/resources/subcategory/model/subcategory.model';
import { Repository } from 'typeorm';

@Injectable()
export class DeleteSubCategoryRepository
  implements DeleteSubCategoryRepositoryContract
{
  constructor(
    @InjectRepository(SubCategoryModel)
    private readonly repository: Repository<SubCategoryModel>,
  ) {}

  async deleteSubCategory(input: { id: number }): Promise<void> {
    await this.repository.delete({
      id: input.id,
    });
  }
}
