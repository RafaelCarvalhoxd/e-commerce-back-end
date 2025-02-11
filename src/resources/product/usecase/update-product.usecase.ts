import { User } from 'src/common/types/user.type';
import { Product } from 'src/resources/product/entity/product.entity';

export abstract class UpdateProductUseCase {
  abstract updateProduct(input: {
    id: number;
    name?: string;
    sku?: string;
    barcode?: string;
    image?: string;
    description?: string;
    price?: string;
    subcategoryId?: number;
    discountPrice?: string;
    active: boolean;
    user: User;
  }): Promise<Product>;
}
