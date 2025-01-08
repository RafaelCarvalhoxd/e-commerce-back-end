import { Product } from 'src/resources/product/entity/product.entity';

export abstract class CreateProductUseCase {
  abstract createProduct(input: {
    name: string;
    image?: string;
    description?: string;
    price: number;
    categoryId: number;
    subcategoryId?: number;
    discountPrice?: number;
    active: boolean;
  }): Promise<Product>;
}
