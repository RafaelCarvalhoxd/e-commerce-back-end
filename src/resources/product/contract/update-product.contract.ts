import { Product } from 'src/resources/product/entity/product.entity';

export abstract class UpdateProductRepositoryContract {
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
    userId: number;
  }): Promise<Product>;
}
