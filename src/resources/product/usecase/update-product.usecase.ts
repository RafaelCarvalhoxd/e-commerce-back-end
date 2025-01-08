import { Product } from 'src/resources/product/entity/product.entity';

export abstract class UpdateProductUseCase {
  abstract updateProduct(input: {
    id: number;
    name?: string;
    image?: string;
    description?: string;
    price?: number;
    subcategoryId?: number;
    discountPrice?: number;
    active: boolean;
  }): Promise<Product>;
}
