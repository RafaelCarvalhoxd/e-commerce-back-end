import { Injectable } from '@nestjs/common';
import { ListSubCategoryRepositoryContract } from 'src/resources/subcategory/contract/list-subcategory.contract';
import { SubCategory } from 'src/resources/subcategory/entity/subcategory.entity';
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
      .getRepository(SubCategory)
      .createQueryBuilder('s')
      .leftJoinAndSelect('s.category', 'c');

    const filters = [
      {
        condition: input.ids,
        query: 's.id IN (:...ids)',
        params: { ids: input.ids },
      },
      {
        condition: input.name,
        query: 's.name IN (:...name)',
        params: { name: input.name },
      },
      {
        condition: input.categoryIds,
        query: 'c.id IN (:...categoryIds)',
        params: { categoryIds: input.categoryIds },
      },
    ];

    filters.forEach(({ condition, query, params }) => {
      if (condition) {
        subcategories.andWhere(query, params);
      }
    });

    return subcategories.getMany();
  }
}
