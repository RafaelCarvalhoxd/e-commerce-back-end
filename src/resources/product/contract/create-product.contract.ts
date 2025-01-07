import { Product } from 'src/resources/product/entity/product.entity';

export abstract class CreateProductRepositoryContract {
  abstract createProduct(input: {
    name: string;
    photo?: string;
    description?: string;
    price: number;
    categoryId: number;
    subcategoryId?: number;
    quantity: number;
    discountPrice?: number;
  }): Promise<Product>;
}
