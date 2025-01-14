import { Injectable } from '@nestjs/common';
import { ListSubCategoryRepositoryContract } from 'src/resources/subcategory/contract/list-subcategory.contract';
import { SubCategory } from 'src/resources/subcategory/entity/subcategory.entity';
import { SubCategoryModel } from 'src/resources/subcategory/model/subcategory.model';
import { DataSource } from 'typeorm';

@Injectable()
export class ListSubCategoryRepository
  implements ListSubCategoryRepositoryContract
{
  constructor(private readonly ds: DataSource) {}

  async listSubCategory(input: {
    ids: number[];
    name?: string[];
    categoryIds: number[];
  }): Promise<SubCategory[]> {
    const subcategories = this.ds
      .getRepository(SubCategoryModel)
      .createQueryBuilder('s')
      .leftJoinAndSelect('s.category', 'c');

    if (input.ids && input.ids.length > 0) {
      subcategories.andWhere('s.id IN (:...ids)', { ids: input.ids });
    }

    if (input.name && input.name.length > 0) {
      subcategories.andWhere(`s.name LIKE ANY (ARRAY[:...name])`, {
        name: input.name.map((n) => `%${n}%`),
      });
    }

    if (input.categoryIds && input.categoryIds.length > 0) {
      subcategories.andWhere('c.id IN (:...categoryIds)', {
        categoryIds: input.categoryIds,
      });
    }

    return subcategories.getMany();
  }
}
