import { Product } from 'src/resources/product/entity/product.entity';

export abstract class UpdateProductUseCase {
  abstract updateProduct(input: {
    id: number;
    name?: string;
    photo?: string;
    description?: string;
    price?: number;
    categoryId?: number;
  }): Promise<Product>;
}
