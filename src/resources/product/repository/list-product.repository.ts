import { Injectable } from '@nestjs/common';
import { ListProductRepositoryContract } from 'src/resources/product/contract/list-product.contract';
import { Product } from 'src/resources/product/entity/product.entity';
import { ProductModel } from 'src/resources/product/model/product.model';
import { DataSource } from 'typeorm';

@Injectable()
export class ListProductRepository implements ListProductRepositoryContract {
  constructor(private readonly ds: DataSource) {}

  async listProduct(input: {
    name?: string;
    minPrice?: number;
    maxPrice?: number;
    categoryId?: number[];
    subcategoryId?: number[];
    page?: number;
    limit?: number;
    orderBy?: 'price' | 'name';
    orderDirection?: 'ASC' | 'DESC';
  }): Promise<[Product[], number]> {
    const products = this.ds
      .getRepository(ProductModel)
      .createQueryBuilder('p')
      .leftJoinAndSelect('p.subcategory', 's')
      .leftJoinAndSelect('s.category', 'c')
      .where('p.active = true');

    const filters = [
      {
        condition: input.name,
        query: 'p.name LIKE :name',
        params: { name: `%${input.name}%` },
      },
      {
        condition: input.minPrice,
        query: 'p.price >= :minPrice',
        params: { minPrice: input.minPrice },
      },
      {
        condition: input.maxPrice,
        query: 'p.price <= :maxPrice',
        params: { maxPrice: input.maxPrice },
      },
      {
        condition: input.categoryId,
        query: 'c.id IN (:...categoryId)',
        params: { categoryId: input.categoryId },
      },
      {
        condition: input.subcategoryId,
        query: 's.id IN (:...subcategoryId)',
        params: { subcategoryId: input.subcategoryId },
      },
    ];

    filters.forEach(({ condition, query, params }) => {
      if (condition) {
        products.andWhere(query, params);
      }
    });

    if (input.page ?? (1 && (input.limit ?? 10))) {
      products.skip((input.page - 1) * input.limit).take(input.limit);
    }

    if (input.orderBy && input.orderDirection) {
      products.orderBy(`p.${input.orderBy}`, input.orderDirection);
    }

    const [data, total] = await products.getManyAndCount();
    return [data, total];
  }
}
