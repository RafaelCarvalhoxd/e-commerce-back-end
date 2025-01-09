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
    categoryId?: number;
    subcategoryId?: number;
  }): Promise<Product[]> {
    const products = this.ds
      .getRepository(ProductModel)
      .createQueryBuilder('p')
      .leftJoinAndSelect('p.subcategory', 's')
      .leftJoinAndSelect('s.category', 'c')
      .where('p.active = true');

    if (input.name) {
      products.andWhere('p.name LIKE :name', { name: `%${input.name}%` });
    }

    if (input.minPrice) {
      products.andWhere('p.price >= :minPrice', { minPrice: input.minPrice });
    }

    if (input.maxPrice) {
      products.andWhere('p.price <= :maxPrice', { maxPrice: input.maxPrice });
    }

    if (input.categoryId) {
      products.andWhere('c.id = :categoryId', { categoryId: input.categoryId });
    }

    if (input.subcategoryId) {
      products.andWhere('s.id = :subcategoryId', {
        subcategoryId: input.subcategoryId,
      });
    }

    return products.getMany();
  }
}
