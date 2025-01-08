import { Product } from 'src/resources/product/entity/product.entity';

export abstract class CreateProductRepositoryContract {
  abstract createProduct(input: {
    name: string;
    image?: string;
    description?: string;
    price: number;
    subcategoryId?: number;
    discountPrice?: number;
    active: boolean;
  }): Promise<Product>;
}
