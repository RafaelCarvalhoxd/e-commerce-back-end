import { Product } from 'src/resources/product/entity/product.entity';

export abstract class UpdateProductRepositoryContract {
  abstract updateProduct(input: {
    id: number;
    name?: string;
    image?: string;
    description?: string;
    price?: number;
    categoryId?: number;
    subcategoryId?: number;
    discountPrice?: number;
    active: boolean;
  }): Promise<Product>;
}
