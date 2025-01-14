import { Controller, Get, Query } from '@nestjs/common';
import { ListProductUseCase } from 'src/resources/product/usecase/list-product.usecase';
import { Pagination } from 'src/common/utils/pagination/pagination.util';
import { Product } from 'src/resources/product/entity/product.entity';
import { ApiQuery, ApiResponse, ApiTags } from '@nestjs/swagger';
import { PaginationPagePipe } from 'src/common/pipes/pagination-page.pipe';
import { PaginationLimitPipe } from 'src/common/pipes/pagination-limit.pipe';
import { ToArrayNumberPipe } from 'src/common/pipes/to-array-number.pipe';

@ApiTags('Product')
@Controller('product')
export class ListProductController {
  constructor(private readonly useCase: ListProductUseCase) {}

  @Get()
  @ApiQuery({
    name: 'name',
    required: false,
    description: 'Filter by product name',
  })
  @ApiQuery({
    name: 'minPrice',
    required: false,
    description: 'Filter by minimum price',
  })
  @ApiQuery({
    name: 'maxPrice',
    required: false,
    description: 'Filter by maximum price',
  })
  @ApiQuery({
    name: 'categoryId',
    required: false,
    description: 'Filter by category ID',
  })
  @ApiQuery({
    name: 'subcategoryId',
    required: false,
    description: 'Filter by subcategory ID',
  })
  @ApiQuery({
    name: 'page',
    required: false,
    description: 'The page number for pagination',
  })
  @ApiQuery({
    name: 'limit',
    required: false,
    description: 'The number of products per page',
  })
  @ApiQuery({
    name: 'orderBy',
    required: false,
    description: 'Field to order the products by (name or price)',
  })
  @ApiQuery({
    name: 'orderDirection',
    required: false,
    description: 'Order direction (ASC or DESC)',
  })
  @ApiResponse({
    status: 200,
    description: 'Successfully retrieved paginated products',
    type: Pagination,
  })
  async list(
    @Query('name') name: string,
    @Query('minPrice') minPrice: number,
    @Query('maxPrice') maxPrice: number,
    @Query('categoryId', ToArrayNumberPipe) categoryId: number[],
    @Query('subcategoryId', ToArrayNumberPipe) subcategoryId: number[],
    @Query('page', PaginationPagePipe) page: number,
    @Query('limit', PaginationLimitPipe) limit: number,
    @Query('orderBy') orderBy: 'price' | 'name',
    @Query('orderDirection') orderDirection: 'ASC' | 'DESC',
  ): Promise<Pagination<Product>> {
    return this.useCase.listProduct({
      name: name,
      categoryId: categoryId,
      limit: limit,
      maxPrice: maxPrice,
      minPrice: minPrice,
      orderBy: orderBy,
      orderDirection: orderDirection,
      page: page,
      subcategoryId: subcategoryId,
    });
  }
}
